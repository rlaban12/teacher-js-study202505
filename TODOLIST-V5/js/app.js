// js/app.js
// 이 파일은 우리 애플리케이션의 '총괄 지휘자'입니다.
// 각 모듈을 가져와(import)서 조립하고, 이벤트 리스너를 등록하여
// 사용자의 상호작용과 데이터, 화면 표시를 연결하는 역할만 합니다.

// --- 모듈 가져오기 ---
import { render } from './render.js';
import {
  getState,
  setTodos,
  setFilter,
  addTodo,
  toggleTodo,
  deleteTodo,
  clearCompletedTodos,
  toggleAllTodos,
  setEditingTodoId,
  editTodoText,
  reorderTodos,
} from './state.js';
import { loadState } from './store.js';

// --- DOM 요소 캐싱 ---
const $todoForm = document.getElementById('todo-form');
const $todoInput = document.getElementById('todo-input');
const $todoList = document.getElementById('todo-list');
const $filters = document.querySelector('.filters');
const $clearCompletedBtn = document.getElementById('clear-completed');

// --- 전역 변수 (드래그 앤 드롭용) ---
// 드래그를 시작한 아이템의 id를 임시로 저장할 변수
let draggedTodoId = null;

const $toggleAllBtn = document.getElementById('toggle-all-button');

// --- 이벤트 핸들러 함수 ---
// 이벤트 핸들러는 사용자의 입력을 받아 state 변경 함수를 호출하고,
// 마지막에 render()를 호출하여 화면을 업데이트하는 역할만 합니다.

function handleAddTodo(e) {
  e.preventDefault();
  const newTodoText = $todoInput.value.trim();
  if (newTodoText) {
    addTodo(newTodoText);
    $todoInput.value = '';
    $todoInput.focus();
    render(getState());
  }
}

function handleTodoListClick(e) {
  const todoId = +e.target.closest('.todo-item')?.dataset.id;
  if (!todoId) return;

  if (e.target.matches('.todo-check')) {
    toggleTodo(todoId);
    render(getState()); // render함수 옮기기
  } else if (e.target.matches('.delete-button, .delete-button *')) {
    deleteTodo(todoId);
    render(getState());
  }
}

function handleFilterClick(e) {
  if (e.target.matches('button')) {
    const filter = e.target.id.replace('filter-', '');
    setFilter(filter);
    render(getState());
  }
}

function handleClearCompleted() {
  clearCompletedTodos();
  render(getState());
}

function handleToggleAll() {
  toggleAllTodos();
  render(getState());
}

function handleTodoListDblClick(e) {
  const $todoItem = e.target.closest('.todo-item');
  // 더블클릭된 대상이 .todo-text가 맞는지 확인합니다.
  if ($todoItem && e.target.matches('.todo-text')) {
    const todoId = +$todoItem.dataset.id;
    // state 모듈에 "수정 모드로 변경해줘!" 라고 명령만 내립니다.
    setEditingTodoId(todoId);
    render(getState()); // 화면을 다시 그려달라고 요청합니다.

    // 화면이 다시 그려진 후, 새로 생긴 input에 자동으로 포커스를 줍니다.
    const $newlyRenderedItem = $todoList.querySelector(`[data-id='${todoId}']`);

    // 그 새로운 li 안에서 .edit-input을 찾습니다.
    const $editInput = $newlyRenderedItem.querySelector('.edit-input');

    $editInput?.focus();
    $editInput?.select(); // input 안의 텍스트를 전체 선택해줍니다.
  }
}


// ✨ [문제 1] 수정 완료/취소를 위한 keydown 이벤트 핸들러
function handleEditInputKeydown(e) {
  if (e.target.matches('.edit-input')) {
    const todoId = +e.target.closest('.todo-item').dataset.id;
    if (e.key === 'Enter') {
      const newText = e.target.value.trim();
      if (newText) editTodoText(todoId, newText);
      else deleteTodo(todoId);
      render(getState());
    } else if (e.key === 'Escape') {
      setEditingTodoId(null);
      render(getState());
    }
  }
}

// ✨ [문제 2] 드래그 앤 드롭 이벤트 핸들러들
function handleDragStart(e) {
  const $draggedItem = e.target.closest('.todo-item');
  if (!$draggedItem) return;
  // 드래그 시작 시, 아이템의 id를 저장하고 시각적 효과를 줍니다.
  draggedTodoId = +$draggedItem.dataset.id;
  $draggedItem.classList.add('dragging');
}

function handleDragOver(e) {
  // dragover 이벤트에서는 preventDefault를 호출해야 drop 이벤트가 정상적으로 발생합니다.
  e.preventDefault();
  const $currentItem = e.target.closest('.todo-item');
  if (!$currentItem || +$currentItem.dataset.id === draggedTodoId) return;

  // 다른 아이템들 위에 있을 때의 시각적 효과를 위한 클래스 관리
  // 이전에 .drag-over가 적용된 요소가 있다면 제거합니다.
  const $prevDragOver = $todoList.querySelector('.drag-over');
  if ($prevDragOver) $prevDragOver.classList.remove('drag-over');
  $currentItem.classList.add('drag-over');
}

function handleDrop(e) {
  const $dropTarget = e.target.closest('.todo-item');
  if (!$dropTarget || +$dropTarget.dataset.id === draggedTodoId) return;
  
  // state 모듈에 순서 변경을 요청합니다.
  reorderTodos(draggedTodoId, +$dropTarget.dataset.id);
  render(getState()); // 변경된 순서로 화면을 다시 그립니다.
}

function handleDragEnd(e) {
  // 드래그가 끝나면 모든 임시 클래스를 정리합니다.
  draggedTodoId = null;
  $todoList.querySelectorAll('.todo-item').forEach(li => {
    li.classList.remove('dragging', 'drag-over');
  });
}



// --- 애플리케이션 초기화 및 이벤트 리스너 등록 ---
function init() {
  // 1. 이벤트 리스너를 등록합니다.
  $todoForm.addEventListener('submit', handleAddTodo);
  $todoList.addEventListener('click', handleTodoListClick);
  $filters.addEventListener('click', handleFilterClick);
  $clearCompletedBtn.addEventListener('click', handleClearCompleted);

  $toggleAllBtn.addEventListener('click', handleToggleAll); 
  $todoList.addEventListener('dblclick', handleTodoListDblClick); 

  $todoList.addEventListener('keydown', handleEditInputKeydown); // ✨ [문제 1]

  // ✨ [문제 2] 드래그 앤 드롭 이벤트 리스너 등록
  $todoList.addEventListener('dragstart', handleDragStart);
  $todoList.addEventListener('dragover', handleDragOver);
  $todoList.addEventListener('drop', handleDrop);
  $todoList.addEventListener('dragend', handleDragEnd);

  // 2. localStorage에서 저장된 상태를 불러옵니다.
  const loadedState = loadState();
  if (loadedState) {
    // 저장된 상태가 있다면, 그 상태로 애플리케이션을 시작합니다.
    setTodos(loadedState.todos);
    setFilter(loadedState.currentFilter);
  } else {
    // 저장된 상태가 없다면, 초기 데이터를 설정합니다. (선택사항)
    setTodos([]);
  }

  // 3. 초기 화면을 렌더링합니다.
  render(getState());
}

// 애플리케이션 시작!
init();
