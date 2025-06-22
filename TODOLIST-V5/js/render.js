// js/render.js
// 이 파일은 오직 '화면을 그리는' 역할만 담당합니다.
// 데이터를 받아서, 어떻게 DOM 요소를 만들고 화면에 표시할지에만 집중합니다.

// --- DOM 요소 캐싱 ---
// 화면을 그리는 데 필요한 모든 요소들을 미리 찾아둡니다.
const $todoList = document.getElementById('todo-list');
const $todosLeftCount = document.getElementById('todos-left-count');
const $filters = document.querySelector('.filters');

const $toggleAllBtn = document.getElementById('toggle-all-button');
const $toggleAllIcon = $toggleAllBtn.querySelector('i');

/**
 * @description 전체 애플리케이션 화면을 렌더링하는 메인 함수
 * @param {object} state - 현재 애플리케이션 상태 객체
 */
export function render(state) {
  let todosToRender = [];
  if (state.currentFilter === 'all') {
    todosToRender = state.todos;
  } else if (state.currentFilter === 'active') {
    todosToRender = state.todos.filter((todo) => !todo.completed);
  } else if (state.currentFilter === 'completed') {
    todosToRender = state.todos.filter((todo) => todo.completed);
  }

  $todoList.innerHTML = '';
  todosToRender.forEach((todo) => {
    const $li = document.createElement('li');
    $li.className = 'todo-item';
    $li.dataset.id = todo.id;

    // ✨ [문제 2] li 요소를 드래그 가능하도록 설정합니다.
    $li.draggable = true;

    if (todo.completed) $li.classList.add('completed');

    if (todo.id === state.editingTodoId) {
      // 만약 현재 아이템이 수정 모드라면, input 태그를 렌더링합니다.
      $li.innerHTML = `<input type="text" class="edit-input" value="${todo.text}">`;
    } else {
      // 수정 모드가 아니라면, 기존의 item-container를 렌더링합니다.
      const createdAt = new Date(todo.createdAt).toLocaleString('ko-KR'); // [문제 3]
      $li.innerHTML = `
        <div class="item-container">
            <input type="checkbox" class="todo-check" ${
              todo.completed ? 'checked' : ''
            }>
            <span class="todo-text">${todo.text}</span>
            <span class="todo-created-at">${createdAt}</span>
            <button class="delete-button"><i class="fas fa-trash-alt"></i></button>
        </div>
      `;
    }
    $todoList.append($li);
  });

  // 3. 남은 할 일 개수 UI 렌더링
  const activeTodosCount = state.todos.filter((todo) => !todo.completed).length;
  $todosLeftCount.textContent = activeTodosCount;

  // 4. 필터 버튼 UI 렌더링
  $filters.querySelectorAll('button').forEach(($btn) => {
    if ($btn.id === `filter-${state.currentFilter}`) {
      $btn.classList.add('active');
    } else {
      $btn.classList.remove('active');
    }
  });

  // ✨ [문제 3] 필터별 할 일 개수 표시 UI 업데이트
  const allCount = state.todos.length;
  const activeCount = activeTodosCount;
  const completedCount = allCount - activeCount;

  document.querySelector('#filter-all .count').textContent = allCount;
  document.querySelector('#filter-active .count').textContent = activeCount;
  document.querySelector('#filter-completed .count').textContent = completedCount;

  const areAllCompleted =
    state.todos.length > 0 && state.todos.every((todo) => todo.completed);
  $toggleAllBtn.classList.toggle('all-completed', areAllCompleted);
  $toggleAllIcon.className = areAllCompleted
    ? 'fas fa-check-square'
    : 'far fa-check-square';
}
