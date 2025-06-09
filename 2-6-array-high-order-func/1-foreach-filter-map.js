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
    age: 36,
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


// filter : 주어진 논리조건에 맞는 데이터를 필터링하여 새 배열로 리턴

const f1 = numbers.filter(n => n % 2 === 1);
console.log(f1);
console.log(numbers);

console.log('===================');

const f2 = foods.filter((food, idx) => {
  console.log(food, idx);
  return food.includes('찌개');
});
console.log(f2);

// 회원목록에서 급여가 400만원 이상인 사람들만 필터링
const f3 = userList.filter(user => user.salary >= 4000000);
console.log(f3);

console.log('===================');

// map : 배열에서 특정 데이터들을 추출해서 새 배열에 저장
/*
    filter : 10개의 데이터를 필터링하면 개수가 줄어들 가능성
        => 10명의 회원 중 서울 사는 사람만 필터링 -> 7건
        => [{}, {}, {}, {} ] =>  [ {}, {} ]
    map : 10개의 데이터를 매핑하면 개수가 그대로 10개
        => 10명의 회원중 각 회원의 이름만 매핑 => 10개
        => [ {}, {}, {}, {} ] => [ '', '', '', '' ]
 */

const m1 = numbers.map((n, idx) => {
  console.log(n, idx);
  return n + 300;
});

console.log(m1);

const m2 = foods.map(food => food.slice(0, 2));
console.log(m2);


const m3 = foods.map(food => food.includes('찌개'));
console.log(m3);

console.log('===================');

// numbers에 있는 숫자들을 li태그로 모두 감싸고 싶어
const listItems = numbers.map(n => `<li>${n}</li>`);
console.log(listItems);

console.log('===================');

// 회원 목록에서 급여가 300만원 이상이면서 나이가 30대인 회원의
// 이름과 직업과 급여와 나이만 추출
const finalUserList = userList
  .filter(user => user.salary >= 3000000 && user.age >= 30 && user.age < 40)
  .map(user => ({
    name: user.userName[0] + '**',
    job: user.job,
    salary: user.salary,
    age: user.age
  }));

console.log(finalUserList);

console.log('===================');

const petName = '뽀삐';
const petAge = 3;

const myDog = { petName, petAge };
console.log(myDog);

console.log('===================');

const finalUserList2 = userList
  .filter(user => user.salary >= 3000000 && user.age >= 30 && user.age < 40)
  .map(({age, job, salary, userName:name}) => ({name: name[0] + '**', job, salary, age}));

console.log(finalUserList2);

console.log('===================');

// 필터링
const filteredArray = [];
for (const user of userList) {
  if (
    user.salary >= 3000000
    && user.age >= 30
    && user.age < 40
  ) {
    filteredArray.push(user);
  }
}

// 매핑
const finalUserList3 = [];
for (const user of filteredArray) {
  finalUserList3.push({
    name: user.userName,
    job: user.job,
    salary: user.salary,
    age: user.age
  });
}

console.log(finalUserList3);

console.log('===================');

// 배열에서 중복데이터 제거하기
const cities = ['서울', '인천', '서울', '부산', '부산', '서울'];
const distinctCities = [...new Set(cities)];
distinctCities.push('제주');

console.log(distinctCities);