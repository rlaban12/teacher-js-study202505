
// return : 함수가 실행결과를 함수밖으로 가져가는 것
//          함수를 종료하는 기능
function foo() {
  let a = 10, b = 20;
  console.log(`a: ${a}`);
  return a + b;

  let c = 500;
  console.log(`c: ${c}`);
}

foo();

function callYourName(name) {
  let prohibits = ['멍청이', '바보', '빡대가리'];
  if (prohibits.includes(name)) {
    console.log('나쁜말은 쓰지 마세요~~');
    return;
  }
  console.log(`${name}님 안녕하세요!!`);
}

callYourName('빡대가리');

console.log('===================');

function loop(n) {
  for (let i = 0; i < 5; i++) {
    if (n === 4) {
      console.log('break!!!');
      return;
    }
    console.log(`반복문실행: ${i}`);
  } // end for
  console.log('수고하셨어요~~~');
} // end function

loop(4);

console.log('===================');

// 매개변수는 여러 개일 수 있지만 리턴값은 오직 하나!
// f(x) = 2a + 3b
function add(n1, n2) {
  return n1 + n2;
}

// 숫자 2개를 전달하면 두 수의 합,차,곱,나눗셈의 결과를 모두 리턴
function operate(n1, n2) {
  // return [addResult, mulResult, divResult, subResult];
  return {
    multi: n1 * n2,
    sub: n1 - n2,
    add: n1 + n2,
    divide: n1 / n2
  };
}


let results = operate(30, 3);
console.log(`덧셈: ${results.add}`);
console.log(`뺄셈: ${results.sub}`);
console.log(`곱셈: ${results.multi}`);
console.log(`나눗셈: ${results.divide}`);






