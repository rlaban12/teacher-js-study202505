
(function() {

  // ======== 상태관리 변수 및 상수 ======== //

  // 로컬스토리지 상태저장 데이터 키(key)
  const TODO_STORAGE_KEY = 'todos-state';

  // 우리 애플리케이션에 필요한 모든 데이터를 하나의 객체 안에 보관합니다.
  const state = loadState();

  // ======= DOM 가져오기 ======== //
  const $todoForm = document.getElementById('todo-form');
  const $todoInput = document.getElementById('todo-input');
  const $todoList = document.getElementById('todo-list');
  const $todosLeftCount = document.getElementById('todos-left-count');
  const $filters = document.querySelector('.filters');
  const $clearCompletedBtn = document.getElementById('clear-completed');

  // ======== 핵심 로직 함수 정의 ========= //

  /**
   * @description 현재 state객체를 기반으로 화면을 렌더링하는 함수
   */
  function render() {

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

  /**
   * @description 완료된 모든 할 일을 삭제하는 함수
   */
  function clearCompletedTodos() {
    state.todos = state.todos.filter(todo => !todo.completed);
    render();
  }

  /**
   * @description 새로운 할 일을 상태배열에 추가하는 함수
   * @param newText {string} - 새로 추가할 할 일의 제목
   */
  function addTodo(newText) {
    state.todos.push({
      id: Date.now(),
      text: newText,
      completed: false,
    });
    // 데이터가 변경될 때마다 리렌더링 명령
    render();
  }

  /**
   * @description 클릭한 할 일을 삭제하는 함수
   * @param targetId 클릭한 li태그가 갖고있던 id
   */
  function deleteTodo(targetId) {
    state.todos = state.todos.filter(todo => todo.id !== targetId);
    // 렌더링 명령
    render();
  }

  /**
   * @description 할 일의 완료 상태를 토글하는 함수
   * @param targetId 클릭한 li태그가 갖고있던 id
   */
  function toggleTodo(targetId) {
    state.todos = state.todos.map(todo =>
      todo.id === targetId ? { ...todo, completed: !todo.completed } : todo
    );
    render();
  }

  /**
   * @description 현재 사용자가 등록한 할 일과 선택한 필터정보를 로컬스토리지에 저장
   * @param state {object} - 저장할 상태 객체
   */
  function saveState(state) {
    // 로컬스토리지에는 객체나 배열을 저장 불가
    // 문자열만 저장가능함 -> 객체나 배열을 문자열(JSON)로 바꾸면됨
    localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(state));
  }

  /**
   * @description localStorage에서 저장된 상태 객체를 불러오는 함수
   * @return {object} - 저장된 상태객체를 리턴
   */
  function loadState() {
    const savedState = localStorage.getItem(TODO_STORAGE_KEY);
    if (savedState) {
      // 저장된 데이터가 있을 경우 JSON을 JS로 변환해서 리턴
      return JSON.parse(savedState);
    }
    // 저장된 데이터가 없을 경우 리턴
    return {
      currentFilter: 'all',
      todos: []
    };
  }


  // ======== 이벤트 리스너 설정 ========== //

  // 필터링 버튼 클릭 이벤트
  $filters.addEventListener('click', e => {
    if (!e.target.matches('button')) return;

    // 여기서 필터를 누르면 렌더링? 이런거 여기서하지말고
    // 렌더링은 render함수에게 맡겨라
    // 필터가 뭐가 눌러졌는지만 확인해서 상태값만 변경해라
    const buttonId = e.target.id;
    state.currentFilter = buttonId.substring(buttonId.indexOf('-') + 1);

    render(); // 바뀐 상태에 맞게 리렌더링 명령
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

  // ======== 실행 코드 ========== //
  render();

})();