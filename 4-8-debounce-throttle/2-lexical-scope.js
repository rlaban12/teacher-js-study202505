
// let count = 0;
let hobbyCount = 0;
let friendCount = 0;

// 내 취미의 카운트를 세는 함수
function increaseHobbyCount() {
  // let count = 0; // 지역 변수
  return ++hobbyCount;
}

// 내 친구의 카운트를 세는 함수
function increaseFriendCount() {
  // let count = 0;
  return ++friendCount;
}

console.log('===== 취미 카운팅 시작! =====');
console.log(increaseHobbyCount()); // 1
console.log(increaseHobbyCount()); // expected: 2, actual: 1
console.log(increaseHobbyCount()); // expected: 3, actual: 1

console.log('===== 친구 카운팅 시작! =====');
console.log(increaseFriendCount()); // 1
console.log(increaseFriendCount()); // expected: 2, actual: 1