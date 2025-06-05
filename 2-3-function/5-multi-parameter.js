function add(n1, n2) {
  return n1 + n2;
}

function add3(n1, n2, n3) {
  return n1 + n2 + n3;
}

let r1 = add(20, 30);
console.log(`r1: ${r1}`);

let r2 = add3(20, 30, 40);
console.log(`r2: ${r2}`);

console.log('===================');

// n개의 파라미터를 전달할 경우
function addAll(numbers=[]) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}

let sum = addAll([10, 20, 30, 40, 50, 60]);
console.log(`sum: ${sum}`);

console.log('===================');

// ES6+ : 자바스크립트 최신문법
function addAllES6(...numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}

let sum2 = addAllES6(10, 20, 30, 40, 50, 100, 200);
console.log(`sum2: ${sum2}`);


function foo(arr1, arr2) {

}

foo([1,2],[3,4,5])






