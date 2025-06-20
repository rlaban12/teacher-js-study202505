import {loadState} from './store.js';
import {render} from './render.js';

// ======== 상태관리 변수 및 상수 ======== //
// 우리 애플리케이션에 필요한 모든 데이터를 하나의 객체 안에 보관합니다.

// 꽁꽁 숨겨야 하는 원본
const state = loadState();

// ======== 핵심 로직 함수 정의 ========= //

/**
 * @description 현재 관리되고 있는 앱의 데이터 상태를 반환하는 함수
 * @returns {object} 현재 상태값의 사본
 */
export function getState() {
  // 외부에서 state원본을 건드리지 않도록 사본 리턴
  return { ...state };
}

/**
 * @description 완료된 모든 할 일을 삭제하는 함수
 */
export function clearCompletedTodos() {
  state.todos = state.todos.filter(todo => !todo.completed);
  render(state);
}

/**
 * @description 새로운 할 일을 상태배열에 추가하는 함수
 * @param newText {string} - 새로 추가할 할 일의 제목
 */
export function addTodo(newText) {
  state.todos.push({
    id: Date.now(),
    text: newText,
    completed: false,
  });
  // 데이터가 변경될 때마다 리렌더링 명령
  render(state);
}

/**
 * @description 클릭한 할 일을 삭제하는 함수
 * @param targetId 클릭한 li태그가 갖고있던 id
 */
export function deleteTodo(targetId) {
  state.todos = state.todos.filter(todo => todo.id !== targetId);
  // 렌더링 명령
  render(state);
}

/**
 * @description 할 일의 완료 상태를 토글하는 함수
 * @param targetId 클릭한 li태그가 갖고있던 id
 */
export function toggleTodo(targetId) {
  state.todos = state.todos.map(todo =>
    todo.id === targetId ? { ...todo, completed: !todo.completed } : todo
  );
  render(state);
}


export function filterTodos(buttonId) {
  state.currentFilter = buttonId.substring(buttonId.indexOf('-') + 1);
  render(state); // 바뀐 상태에 맞게 리렌더링 명령
}
