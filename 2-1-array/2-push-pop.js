
let petList = ['멍멍이', '야옹이', '짹짹이'];
console.log(petList);

// push() : 배열 맨 끝에 데이터 추가
petList.push('거부긔');
petList.push('어흥이', '비둘긔', '닭다리');
console.log(petList);
console.log(petList.length);

// pop() : 배열 맨 끝에 데이터를 삭제
petList.pop();
petList.pop();
petList.pop();
let x = petList.pop();

console.log(petList);
console.log(`x: ${x}`);

// shift() : 배열의 맨 첫번째 데이터 삭제
// unshift() : 배열의 맨 첫번째 위치에 데이터 추가
petList.unshift('뻘뻘이');
console.log(petList);

petList.shift();
petList.shift();
console.log(petList);



