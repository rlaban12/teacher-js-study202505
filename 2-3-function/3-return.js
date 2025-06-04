// return - 함수의 반환값 - 함수가 생성한 값을 함수 밖으로 가져가는 것
function add(first, second) {
  // 함수 안에있는 변수들은 함수 실행이 끝난 후 메모리에서 사라짐.
  let result = first + second;
  console.log(`${first} + ${second} = ${result}`);
  return result;
}

// return이 없는 함수 - void함수
function multiply(n1, n2) {
  console.log(`${n1} x ${n2} = ${n1 * n2}`);
  // return n1 * n2;
}

let x = add(10, 20); // 30이라는 출력을 확인! -> 이제 이 30을 가지고 후속행동하고싶음
let total = x * 2;
console.log(`total: ${total}`);

console.log('===================');
// return이 없는 함수는 리턴값이 undefined로 처리됨.
// 즉 변수에 담으면 안된다.
let z = multiply(7, 2);
console.log(`z: ${z}`);

console.log('===================');

//             35
//       add  (     10      ,       25    )
//            add ( 4   , 6)   add (   15,   10 )
let r1 = add(add(add(3, 1), 6), add(add(7, 8), 10));
console.log(`r1 : ${r1}`);

//          6    ,     14
multiply(add(2, 4), add(5, 9));

//  add ( undefined, undefined )
add(multiply(2, 3), multiply(4, 4));

// 리턴이 없는 함수는 변수에 저장하지도 말고, 다른 함수의 매개값으로 쓰면안된다.
// 단독호출해서 사용할 것!

console.log('===================');

let arr = [1, 2, 3, 4];

let idx = arr.indexOf(3);
let deleteItem = arr.pop();

console.log();

console.log('===================');

// 배열의 indexOf를 어떻게 구현했을ㄲㅏ??
function myIndexOf(array, searchElement) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchElement) {
      return i; // return이 break보다 더 강하게 탈출의미가 있음.
    }
  }
  return -1;
}

function myIncludes(array, searchElement) {
  return myIndexOf(array, searchElement) !== -1;
}


let foods = ['떡볶이', '우동', '레몬', '달고나'];
let findIndex = myIndexOf(foods, '달고나');

console.log(`index: ${findIndex}`);
console.log(`flag: ${myIncludes(foods, '짬뽕')}`);








