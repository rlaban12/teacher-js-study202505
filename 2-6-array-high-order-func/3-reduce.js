
const nums = [10, 20, 30, 40, 50];

const sum = nums.reduce((acc, cur) => acc + cur, 0);
console.log(`sum: ${sum}`);

/*
  reduce() : 배열의 각 요소들을 주어진 콜백에 맞게 합산, 누적하여
            단 하나의 결과값을 반환

  reduce에 전달되는 콜백
  - callback(accumulator, currentValue)
  1. accumulator: 어떤 데이터를 계속 누적해 나가는 변수
  2. currentValue: 현재 루프회차에서 사용할 데이터

  -> reduce는 반복을 실행할 때마다 currentValue를 accumulator에
     return 조건에 맞게 누적

  -> reduce는 마지막에 accumulator의 리턴값을 리턴
*/



const result = nums.reduce((a, b) => {
  console.log(`a: ${a}`); // 처음에는 배열의 0번이 들어감
  console.log(`b: ${b}`); // 배열의 1번부터 끝까지 순차적으로 회전
  console.log('===================');
  return a + b; // 다음번 a의 값
}, 0);

console.log(`result: ${result}`);

/*
  reduce의 콜백 다음 파라미터는 initialValue를 의미하며
  반복문의 accumulator시작값을 0번 인덱스에서 initialValue로 교체함
  따라서 initialValue를 0으로 두고 return a + b;

  0 + 10 + 20 + 30 + 40 + 50

  initialValue를 생략하면

  10 + 20 + 30 + 40 + 50
*/


console.log('===================');



const appleBasket = [
  {
    color: 'green',
    sweet: 13,
  },
  {
    color: 'red',
    sweet: 14,
  },
  {
    color: 'red',
    sweet: 11,
  },
  {
    color: 'green',
    sweet: 6,
  },
  {
    color: 'green',
    sweet: 7,
  },
  {
    color: 'yellow',
    sweet: 7,
  },
  {
    color: 'yellow',
    sweet: 8,
  },
  {
    color: 'green',
    sweet: 9,
  },
  {
    color: 'yellow',
    sweet: 17,
  },
];

// 사과바구니에 있는 모든 사과들의 당도(sweet)를 합산해주세요.
/*let totalSweet = 0;
for (const apple of appleBasket) {
  totalSweet += apple.sweet;
}*/

/*const totalSweet = appleBasket.reduce((a, b) => {
  console.log(`a: `, a);
  console.log(`b: `, b);
  console.log('===================');
  return a + b.sweet;
}, 0);*/

const totalSweet = appleBasket.reduce((acc, curr) => acc + curr.sweet, 0);

console.log(`totalSweet: ${totalSweet}`);


console.log('===================');

/*
  색깔별로 사과 카운트해서 객체로 만들기

  결과 예시 : { 'red': 2, 'green': 4, 'yellow': 3 }
*/

const resultObj = {};

for (const apple of appleBasket) {
  // 현재 등장한 색깔이 처음 등장한 색깔인가??
  // -> 해당 색깔을 key로 value는 1로 동적 프로퍼티 추가
  // 이전에 등장했던 색깔인가??
  // -> 기존의 값에서 1을 증가
  const color = apple.color;
  if (color in resultObj) {
    resultObj[color]++;
  } else {
    resultObj[color] = 1;
  }
}
console.log(resultObj);


console.log('===================');

const finalResult = appleBasket.reduce((resultObj, apple) => {
  // console.log(`resultObj:`, resultObj);
  // console.log(`apple:`, apple);
  // console.log('===================');

  if (apple.color in resultObj) { // 이미 저장된 색상
    resultObj[apple.color]++;
  } else { // 처음 나온 색상
    resultObj[apple.color] = 1;
  }
  return resultObj;
}, {});

console.log(finalResult);


// reduce의 구현
function myReduce(callback, initialValue) {

  let accumulator = initialValue !== undefined ? initialValue : appleBasket[0];
  const startIndex = initialValue !== undefined ? 0 : 1;
  for (let i = startIndex; i < appleBasket.length; i++) {
    accumulator = callback(accumulator, appleBasket[i]);
  }
  return accumulator;
}

console.log('===================');

const result2 = myReduce((a, b) => a+b.sweet, 0);
console.log(`result2: ${result2}`);




