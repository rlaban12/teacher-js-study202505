
import elements from './dom.js';
import {saveState} from './store.js';

/**
 * @description 현재 state객체를 기반으로 화면을 렌더링하는 함수
 */
export function render(state) {

  const { $todoList, $todosLeftCount } = elements;

  let todosToRender = [];
  // 현재 선택한 필터에 맞게 배열을 재조정
  switch (state.currentFilter) {
    case "all":
      todosToRender = state.todos;
      break;
    case "active":
      todosToRender = state.todos.filter(todo => !todo.completed);
      break;
    case "completed":
      todosToRender = state.todos.filter(todo => todo.completed);
      break;
  }

  // 기존 ul의 자식을 전체삭제
  $todoList.innerHTML = '';

  // 할 일 배열을 순회하여 태그를 동적 삽입
  todosToRender.forEach(({id, text, completed}) => {
    const $li = document.createElement('li');
    $li.classList.add('todo-item');

    if (completed) $li.classList.add('completed');

    // id를 태그에 심어서 나중에 삭제나 수정할 때 사용
    $li.dataset.id = id;

    $li.innerHTML = `
        <div class="item-container">
          <input type="checkbox" class="todo-check" ${completed ? 'checked' : ''}>
          <span class="todo-text">${text}</span>
          <button class="delete-button">
              <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      `;

    $todoList.append($li);
  });

  // 남은 할 일 개수를 계산해서 화면에 업데이트
  $todosLeftCount.textContent = state.todos.filter(todo => !todo.completed).length.toString();

  // 현재 활성화된 필터 버튼에 'active' 클래스를 적용합니다.
  document.querySelectorAll('.filters button').forEach(($btn) => {
    if ($btn.id === `filter-${state.currentFilter}`) {
      $btn.classList.add('active');
    } else {
      $btn.classList.remove('active');
    }
  });

  saveState(state);
}