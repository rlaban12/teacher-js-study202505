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

const idx = foods.indexOf('김치찌개');
console.log(`idx: ${idx}`);

// 회원목록에서 직업이 발렛파킹인 객체는 몇번 인덱스에 있는가?
function findIndex(callback) {
  for (let i = 0; i < userList.length; i++) {
    if (callback(userList[i])) {
      return i;
    }
  }
  return -1;
}

// findIndex() : 주어진 콜백조건에 맞는 처음 발견된 객체데이터의 인덱스를 반환
const index = userList.findIndex(user => user.job === '추노');
console.log(`index: ${index}`);


// find(): 주어진 조건에 일치하는 처음 발견된 객체 데이터 자체를 리턴
const found = userList.find(user => user.job === '추노');
console.log(found);

function myFind(callback) {
  const idx = findIndex(callback);
  return idx !== -1 ? userList[idx] : null;
}


console.log('===================');

// some() : 콜백조건에 맞는 데이터가 하나라도 있는지 여부 확인
// every() : 콜백조건에 모든 데이터가 맞는지 확인

// 급여가 500만원 이상인 회원이 한명이라도 있는가? - some
const flag1 = userList.some(user => user.salary >= 5000000);
console.log(`flag1: ${flag1}`);

// 모든 회원이 서울에 사는가? - every
const flag2 = userList.every(user => user.address === '서울');
console.log(`flag2: ${flag2}`);


