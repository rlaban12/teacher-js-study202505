
let apple = 3 * 5;

console.log(apple + 3);

let myName = "파스타";

console.log(myName);

// 변수의 값은 변경 가능함
apple = 100;
console.log(apple + 3); // 103

console.log(apple); // 100

apple = apple + 3;
console.log(apple); // 103

// 변수의 이름을 지을 때 주의사항
let friendName3; // 관례: camel case
// let 3friendName; // 이름이 숫자로 시작하면 안됨
let $friendName_; // 특수문자 사용불가 : _, $
// let let; // 예약어(키워드)는 변수이름 사용불가

// 변수의 선언
let banana;
let Banana;  // 대소문자를 다르게하면 다른 변수다

// 변수의 초기화 (initialize)
banana = "맛도리 뻐네너";

// 만약 변수를 초기화하지 않으면 undefined가 저장됨.
console.log(Banana);





