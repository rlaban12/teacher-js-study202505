const userList = [
  {
    account: 'abc1234',
    userName: '대길이',
    job: '추노',
    address: '서울',
    hobbies: ['수영', '축구', '테니스'],
    salary: 5400000,
    age: 35,
  },
  {
    account: 'banana',
    userName: '빠나나',
    job: '과일',
    address: '서울',
    hobbies: ['푸드파이팅', '테니스'],
    salary: 9700000,
    age: 18,
  },
  {
    account: 'park1234',
    userName: '주차왕',
    job: '발렛파킹',
    address: '경기',
    hobbies: ['족구', '축구', '테니스', '영화감상'],
    salary: 3900000,
    age: 56,
  },
  {
    account: 'fire',
    userName: '불꽃남자카리스마',
    job: '게이머',
    address: '서울',
    hobbies: ['독서', '테니스'],
    salary: 1900000,
    age: 42,
  },
];

const numbers = [1, 2, 3, 4, 5, 6];
const foods = ['제육볶음', '김치찌개', '육개장', '파스타', '된장찌개'];


/*
for (const n of numbers) {
  console.log(n);
}
*/

/*
for (let i = 0; i < numbers.length; i++) {
  if (i % 2 === 0) {
    console.log(numbers[i]);
  }
}
*/


function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
}


// forEach() : 배열의 반복문을 깔끔하게 처리
numbers.forEach((n, i) => {
  if (i % 2 === 0) {
    console.log(n);
  }
});

console.log('===================');

foods.forEach((food, idx) => {
  console.log(`${food} 준마탱~~ : ${idx}`);
});

console.log('===================');

userList.forEach(({ userName:name, job }) => {
  console.log(`제 이름은 ${name}이구요~~ 직업은 ${job}이에요!`);
});
