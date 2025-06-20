

// 로컬스토리지 상태저장 데이터 키(key)
const TODO_STORAGE_KEY = 'todos-state';

/**
 * @description 현재 사용자가 등록한 할 일과 선택한 필터정보를 로컬스토리지에 저장
 * @param state {object} - 저장할 상태 객체
 */
export function saveState(state) {
  // 로컬스토리지에는 객체나 배열을 저장 불가
  // 문자열만 저장가능함 -> 객체나 배열을 문자열(JSON)로 바꾸면됨
  localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(state));
}

/**
 * @description localStorage에서 저장된 상태 객체를 불러오는 함수
 * @return {object} - 저장된 상태객체를 리턴
 */
export function loadState() {
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
