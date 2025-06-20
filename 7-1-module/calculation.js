
// 계산에 관련된 변수 및 함수를 정의
/*
export function add(n1, n2) {
  return n1 + n2;
}

export const sub = function (n1, n2) {
  return n1 - n2;
};

export const multi = (n1, n2) => n1 * n2;
*/

function add(n1, n2) {
  return n1 + n2;
}

const sub = function (n1, n2) {
  return n1 - n2;
};

const multi = (n1, n2) => n1 * n2;

// export const operation = { add, sub, multi };

// 어떤 데이터를 이름없이 내보낼 때
// export default는 모듈별로 1번만 사용가능함
export default { add, sub, multi };

