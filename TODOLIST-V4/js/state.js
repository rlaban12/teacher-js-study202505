// js/state.js
// 우리 애플리케이션의 모든 데이터를 책임지는 '두뇌' 역할을 합니다.
// 오직 데이터만 관리하고, 화면(DOM)에 대해서는 아무것도 모르는 것이 핵심입니다.

import { saveState } from './store.js';

// 애플리케이션의 모든 상태(데이터)
let state = {
  todos: [], // 할 일 목록 데이터
  currentFilter: 'all', // 현재 필터 상태
  // ✨ [문제 2] 현재 어떤 todo가 수정 중인지 그 id를 저장합니다.
  editingTodoId: null,
};

/**
 * @description 새로운 상태를 받아 기존 상태를 업데이트하고, 변경된 상태를 저장합니다.
 * @param {object} newState - 새로운 상태 객체
 */
function setState(newState) {
  // 새로운 상태를 기존 상태에 덮어씁니다.
  state = { ...state, ...newState };
  // 상태가 변경될 때마다 localStorage에 저장합니다.
  saveState(state);
}

// --- 공개(public)할 상태 관리 함수들 ---

/**
 * @description 현재 상태 객체를 반환합니다.
 * @returns {object} - 현재 애플리케이션 상태
 */
export function getState() {
  // 외부에서 state를 직접 수정하지 못하도록, 복사본을 반환하는 것이 좋습니다.
  return { ...state };
}

export function setTodos(todos) {
  setState({ todos });
}

export function setFilter(filter) {
  setState({ currentFilter: filter });
}

// ✨ [문제 2] editingTodoId 상태를 변경하는 함수 추가
export function setEditingTodoId(id) {
  setState({ editingTodoId: id });
}

export function addTodo(text) {
  const newTodos = [
    ...state.todos,
    {
      id: Date.now(),
      text,
      completed: false,
      // ✨ [문제 3] 생성 날짜를 데이터에 추가합니다.
      createdAt: new Date(),
    },
  ];
  setState({ todos: newTodos });
}

export function toggleTodo(id) {
  const newTodos = state.todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  setState({ todos: newTodos });
}

export function deleteTodo(id) {
  const newTodos = state.todos.filter((todo) => todo.id !== id);
  setState({ todos: newTodos });
}

export function clearCompletedTodos() {
  const newTodos = state.todos.filter((todo) => !todo.completed);
  setState({ todos: newTodos });
}

// ✨ [문제 1] '모두 완료/해제' 기능을 위한 상태 변경 함수
export function toggleAllTodos() {
  // 현재 모든 할 일이 완료되었는지 확인합니다.
  // every()는 배열의 모든 요소가 조건을 만족하면 true를 반환합니다.
  const areAllCompleted = state.todos.every(todo => todo.completed);

  const newTodos = state.todos.map(todo => {
    // 모든 할 일이 이미 완료되었다면, 전부 '진행 중'으로 변경합니다.
    // 그렇지 않다면, 전부 '완료' 상태로 변경합니다.
    return { ...todo, completed: !areAllCompleted };
  });
  setState({ todos: newTodos });
}
