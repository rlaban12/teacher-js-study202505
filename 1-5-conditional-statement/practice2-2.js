
let a = +prompt('첫번째 수 입력');
let b = +prompt('두번째 수 입력');
let c = +prompt('세번째 수 입력');

// 최소값을 담을 변수
let min = a;
// 가장 작은 수 찾기
if (b < min) {
  min = b;
}
if (c < min) {
  min = c;
}
alert(`최소값: ${min}`);