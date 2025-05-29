

// 1. 10안에 있는 2의 배수를 가로로 출력하기
let resultString = '';
for (let i = 2; i <= 10; i+=2) {
  resultString += `${i} `;
}
console.log(resultString);

console.log('===================');
// 2. 1~50 사이 6의 배수 출력하기
for (let i = 1; i <= 50; i++) {
  if (i % 6 === 0) {
    console.log(i);
  }
}

console.log('===================');
// 3. 1~100사이 7의 배수이면서 14의 배수가 아닌수 출력하기
for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0 && i % 14 !== 0) {
    console.log(i);
  }
}

console.log('===================');
// 4. 1~7777 안에 있는 3의 배수 개수 알아내기
let count = 0;


for (let i = 1; i <= 7777; i++) {
  if (i % 3 === 0) {
    count++;
  }
}
// console.log(`i: ${i}`);
console.log(`범위안의 3의배수 개수: ${count}개`);

console.log('===================');
for (let i = 0; i < 5; i++) {
  console.log('hello');
}





