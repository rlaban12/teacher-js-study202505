
let number = 20;
let address = '서울';
let result = '10';

// 타입이 다르면 컴퓨터는 연산을 못함.
// 암묵적 타입변환
// 숫자와 문자의 덧셈은 숫자를 문자로 자동변환하여 결합한다.
console.log(number + result);
console.log(address + number);
console.log(address + number + 30);

// 타입이 달라도 문자를 숫자로 변환했을 때 문제가없다고
// 판단되면 문자를 숫자로 변환해서 연산을 진행 (덧셈 제외)
const operating = number - result;
console.log(operating);

const operating2 = number * result;
console.log(operating2);

// 명시적 변환
let n1 = '10';
let n2 = 20;

// let n3 = Number(n1) + n2;
// let n3 = parseInt(n1) + n2;
let n3 = +n1 + n2;

console.log(`n3: ${n3}`);

let x = 50, y = 70;

// let operResult = String(x) + y;
// let operResult = x.toString() + y;
let operResult = '' + x + y;

console.log(`operResult: ${operResult}`);
