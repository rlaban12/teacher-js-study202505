const userList = [
  {
    account: 'abc1234',
    userName: '대길이',
    job: '추노',
    address: '서울',
    hobbies: ['수영', '축구', '테니스'],
  },
  {
    account: 'banana',
    userName: '빠나나왕',
    job: '과일',
    address: '서울',
    hobbies: ['푸드파이팅', '테니스'],
  },
  {
    account: 'park1234',
    userName: '주차왕',
    job: '발렛파킹',
    address: '경기',
    hobbies: ['족구', '축구', '테니스', '영화감상'],
  },
  {
    account: 'fire',
    userName: '불꽃남자카리스마',
    job: '게이머',
    address: '서울',
    hobbies: ['독서', '테니스'],
  },
];

// 회원 목록에서 회원의 직업들만 모두 추출해서 새 배열로 리턴
// [ '추노', '과일', '발렛파킹', '게이머' ]
// mapping - 원본 데이터셋에서 특정 데이터들만 추출하는 기법
function mapByUserJobs() {
  const mappedArray = [];
  for (const user of userList) {
    const job = user.job;
    mappedArray.push(job);
  }
  return mappedArray;
}

// 회원 목록에서 회원들의 이름만 모두 추출해서 새배열로 줘!
function mapByUserNames() {
  const mappedArray = [];
  for (const user of userList) {
    const name = user.userName;
    mappedArray.push(name);
  }
  return mappedArray;
}


// 회원 목록에서 특정 데이터만 모두 추출해서 새배열로 줘!
function mapByUser(callback) {
  const mappedArray = [];
  for (const user of userList) {
    const item = callback(user);
    mappedArray.push(item);
  }
  return mappedArray;
}

// 아무 목록에서 특정 데이터만 모두 추출해서 새배열로 줘!
function map(array, callback) {
  const mappedArray = [];
  for (const element of array) {
    const item = callback(element);
    mappedArray.push(item);
  }
  return mappedArray;
}

const map1 = mapByUserJobs();
console.log(map1);

console.log('===================');

const map2 = mapByUser(user => user.userName);
console.log(map2);

console.log('===================');

// 회원들의 첫번째 취미들만 추출해줘
const map3 = mapByUser(user => user.hobbies[0]);
console.log(map3);

console.log('===================');

// 회원들의 이름과 주소만 추출해서 객체로 묶은 다음 새배열로 리턴!
// [ {이름: '', 주소: ''}, {}, {}, {} ]
const map4 = mapByUser(user => ({
  name: user.userName,
  occupation: user.job
}));
console.log(map4);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const names = ['홍길동', '김철수', '김뽀삐', '이뚜뚜', '홍뽀로로', '박짜짜'];

console.log('===================');
const map5 = map(numbers, n => n ** 2);
console.log(map5);

console.log('===================');
const map6 = map(names, name => name[0]);
console.log(map6);

console.log('===================');
const map7 = map(userList, user => user.hobbies);
console.log(map7);


