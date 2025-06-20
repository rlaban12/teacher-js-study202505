import elements from './dom.js';
import {addTodo, clearCompletedTodos, deleteTodo, filterTodos, getState, toggleTodo} from './state.js';
import {render} from './render.js';

// 모든 이벤트들을 등록해주는 함수 (비공개)
function bindEvents() {

  // DOM 디스트럭쳐링
  const {
    $filters,
    $clearCompletedBtn,
    $todoList,
    $todoInput,
    $todoForm
  } = elements;

  // ======== 이벤트 리스너 설정 ========== //

  // 필터링 버튼 클릭 이벤트
  $filters.addEventListener('click', e => {
    if (!e.target.matches('button')) return;
    filterTodos(e.target.id);
  });

  // 완료된 할 일 목록 지우기 이벤트
  $clearCompletedBtn.addEventListener('click', e => {
    clearCompletedTodos();
  });

  // 새 할 일을 추가하는 이벤트
  $todoForm.addEventListener('submit', e => {
    e.preventDefault();
    const newTodoText = $todoInput.value.trim();

    // 실제로 상태배열에 입력된 데이터 추가
    if (newTodoText) {
      addTodo(newTodoText);
    }

    // 입력창 비우기
    $todoInput.value = '';
    $todoInput.focus();
  });


  // 할 일 목록에서 특정 할 일을 삭제하는 이벤트
  //                완료 체크 이벤트
  $todoList.addEventListener('click', e => {

    // 클릭한 태그에 연결되어있는 li의 id를 확인
    const todoId = +e.target.closest('.todo-item').dataset.id;

    if (e.target.matches('.delete-button i')) {
      deleteTodo(todoId);
    } else if (e.target.matches('.todo-check')) {
      toggleTodo(todoId);
    }
  });

}

// 앱을 시작하는 함수
export function start() {
  bindEvents();
  // 초기 렌더링
  render(getState());
}