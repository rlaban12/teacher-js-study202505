
// 클로저를 통해 값을 1씩 늘려주는 함수를 반환하는 함수를 만든다
function increaseClosure() {
  let count = 0; // 지역 변수

  function increaseCount() {
    return ++count;
  }
  function decreaseCount() {
    return --count;
  }
  return {
    increaseCount,
    decreaseCount
  };
}

// function decreaseClosure() {
//   let count = 0;
//   return () => --count;
// }

// 취미 개수를 세는 함수 정의(x) -> 클로저에게 받아옴
const { increaseCount: increaseHobbyCount, decreaseCount: decreaseHobbyCount } = increaseClosure();

// 친구 수를 세는 함수를 클로저에게 또 받아옴
const { increaseCount: increaseFriendCount, decreaseCount:decreaseFriendCount } = increaseClosure();

// 장볼 물품 개수를 세는 함수
const increaseCartCount = increaseClosure();

console.log('===== 취미 카운팅 시작! =====');
console.log(increaseHobbyCount()); // 1
console.log(increaseHobbyCount()); // expected: 2, actual: 2
console.log(increaseHobbyCount()); // expected: 3, actual: 3
console.log(decreaseHobbyCount()); // expected: 2, actual: 2
console.log(decreaseHobbyCount()); // expected: 1, actual: 1

console.log('===== 친구 카운팅 시작! =====');
console.log(increaseFriendCount()); // 1
console.log(increaseFriendCount()); // expected: 2, actual: 2
console.log(decreaseFriendCount()); // expected: 1, actual: 1
console.log(decreaseFriendCount()); // expected: 0, actual: 0



//
// console.log('===== 카트 카운팅 시작! =====');
// console.log(increaseCartCount()); // 1
// console.log(increaseCartCount()); // expected: 2, actual: 2
// console.log(increaseCartCount()); // expected: 3, actual: 3
// console.log(increaseCartCount()); // expected: 4, actual: 4