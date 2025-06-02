
let foods = ['닭꼬치', '볶음밥', '족발', '파스타'];





// indexOf() : 배열의 특정 요소가 몇번 인덱스에 있는지 알려줌.
let idx = foods.indexOf('볶음밥');
console.log(`idx: ${idx}`);

// 음식목록에서 족발을 찾아서 보쌈으로 바꿔주세요.
foods[foods.indexOf('족발')] = '보쌈';
console.log(foods);

// includes(): 배열에 특정 요소가 있는지의 유무를 확인
let flag = foods.includes('파스타');
console.log(`flag: ${flag}`);

// 음식목록에 파스타가 없다면~
if (!foods.includes('파스타')) {}

console.log('===================');

// slice() : 배열을 원하는 만큼 분할해서 복사배열로 반환
let numbers = [10, 20, 30, 40, 50, 60];

let slicedNumbers = numbers.slice(1, 3);
console.log(`slice: `, slicedNumbers);
console.log(`origin: `, numbers);

console.log(numbers.slice(3)); // 3번부터 끝까지
console.log(numbers.slice()); // 전체복사

