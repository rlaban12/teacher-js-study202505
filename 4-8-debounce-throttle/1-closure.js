
// 일급 함수: 함수를 값으로 처리

function foo() {
  return 100;
}

function bar() {
  return foo;
}

const result = bar();
console.log(typeof result);

const r1 = result();
console.log(`r1: ${r1}`);

console.log('===================');

function calculate() {
  // 중첩함수, 헬퍼함수
  function add(n1, n2) {
    return n1 + n2;
  }
  return add;
}

const result2 = calculate();
console.log('result2: ', result2(50, 70));

console.log('===================');

// function calculate2() {
//   return (n1, n2) => n1 * n2;
// }

const calculate2 = () => (n1, n2) => n1 * n2;

const r3 = calculate2()(10, 3);
console.log(`r3: ${r3}`);


