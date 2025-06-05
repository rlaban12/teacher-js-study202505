
// 전역 스코프: 프로그램 실행 중 항상 존재하는 변수
let i = '메롱';

// 블록 스코프: { } 안에서 생성된 변수는 블록 밖에서 사라짐.
for (let i = 0; i < 3; i++) {
  console.log(`i: ${i}`);
}

console.log(`outer i: ${i}`);

let n = 'hello'; // 전역 변수

if (true) {
  let n = 10; // 블록 스코프
  if (true) {
    let n = 20; // 블록
    console.log(`inner n: ${n}`); // 20
  }
  console.log(`outer n: ${n}`); // 10
}
console.log(`global n: ${n}`); // hello

// 지역 스코프 (local scope): 함수 내에서 만들어진 변수
function foo() {
  // let x = '홍길동'; // 지역 스코프
  console.log(`local x: ${x}`);
}


let x = '하츄핑';
foo();
console.log(`global x : ${x}`);

/*
  최대한 블록스코프와 지역스코프를 활용해서 코딩할 것!
  전역스코프를 자제할 것!

  1. 변수 이름 충돌 문제
  2. 전역변수는 너무 수명이 김.
  3. 스코프체인이 너무 김.
 */
