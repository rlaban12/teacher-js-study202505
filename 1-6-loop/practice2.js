

// 1. 10안에 있는 2의 배수를 가로로 출력하기
let resultString = '';
let i = 2;
while (i <= 10) {
  resultString += `${i} `;
  i+=2;
}
console.log(resultString);

console.log('===================');
// 2. 1~50 사이 6의 배수 출력하기
i = 1;
while ( i <= 50 ) {
  if (i % 6 === 0) {
    console.log(i);
  }
  i++;
}

console.log('===================');
// 3. 1~100사이 7의 배수이면서 14의 배수가 아닌수 출력하기
i = 1;
while ( i <= 100 ) {
  if (i % 7 === 0 && i % 14 !== 0) {
    console.log(i);
  } // end if
  i++;
} // end while

console.log('===================');
// 4. 1~7777 안에 있는 3의 배수 개수 알아내기
let count = 0;
i = 1;
while ( i <= 7777 ) {
  if (i % 3 === 0) {
    count++;
  }
  i++;
}
// console.log(`i: ${i}`);
console.log(`범위안의 3의배수 개수: ${count}개`);

console.log('===================');
for (let i = 0; i < 5; i++) {
  console.log('hello');
}

