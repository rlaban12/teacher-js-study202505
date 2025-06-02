//                length: 배열에 저장된 데이터 수 - 6
//                index:  0   1   2   3   4   5
let numbers = [10, 20, 30, 40, 50, 60];
console.log(typeof numbers);
console.log(numbers);

// 배열을 참조 - 배열의 데이터 하나하나에 접근
console.log('===================');

console.log(numbers[1]);
console.log(numbers[2] * 10); // 300
console.log(numbers[0] + numbers[2]); // 10 + 30 => 40

// 배열 요소 수정
console.log('===================');
numbers[0] = 999;
numbers[3]++;

console.log(numbers);

// 배열의 길이 체크
console.log(numbers.length);

// 인덱스범위 : 0 ~ N-1
// 배열의 마지막 데이터 접근
const N = numbers.length;
console.log(numbers[N - 1]);

// 배열의 순회 : 전체 데이터에 일일히 모두 접근
console.log('===================');

// 전통적인 반복문 순회법
for (let i = 0; i < numbers.length; i++) {
  console.log(`${i+1}번째 요소 : ${numbers[i]}`);
}

// 배열 전용 반복문 for ~ of
console.log('===================');

for (let n of numbers) {
  console.log(`n: ${n}`);
}




