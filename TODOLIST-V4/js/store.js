// js/store.js
// 이 파일은 브라우저의 localStorage와 통신하는 역할만 전담합니다.
// 데이터를 어떻게 저장하고 불러올지에 대한 구체적인 방법을 다른 모듈은 알 필요가 없습니다.

const STORAGE_KEY = 'vanilla-js-todos';

/**
 * @description 상태 객체를 받아 localStorage에 저장합니다.
 * @param {object} state - 저장할 상태 객체
 */
export function saveState(state) {
  // 객체를 JSON 문자열로 변환하여 저장합니다.
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

/**
 * @description localStorage에서 상태 객체를 불러옵니다.
 * @returns {object | null} - 불러온 상태 객체 또는 저장된 값이 없으면 null
 */
export function loadState() {
  try {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (!savedState) return null; // 저장된 상태가 없으면 null 반환
    return JSON.parse(savedState); // JSON 문자열을 객체로 변환하여 반환
  } catch (e) {
    console.error('Failed to load state from localStorage', e);
    return null; // 파싱 중 에러가 발생하면 null 반환
  }
}
