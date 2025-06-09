
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


// 회원목록에서 취미가 딱 N개인 사람들만 추려서
// 새 배열에 다시 담아서 리턴하는 함수를 정의해주세요.
function filterByHasHobbies(hobbyCount) {
  const newUserList = [];
  for (const user of userList) {
    if (user.hobbies.length === hobbyCount) {
      newUserList.push(user);
    }
  }
  return newUserList;
}

// 회원목록에서 서울에 거주하는 사람들만 새배열에 담아 리턴해줘
// 회원목록에서 경기에 거주하는 사람들만 새배열에 담아 리턴해줘
function filterByUserLiveInRegion(region) {
  // 새 배열 생성
  const filteredArray = [];
  for (const user of userList) {
    if (user.address === region) {
      filteredArray.push(user);
    }
  }
  return filteredArray;
}

// 회원목록에서 특정 조건을 만족하는 회원들을 필터링해주는 함수




function filterUser(callback) {
  const filteredArray = [];
  for (const user of userList) {
    if (callback(user)) {
      filteredArray.push(user);
    }
  }
  return filteredArray;
}
function filter(array, callback) {
  const filteredArray = [];
  for (const element of array) {
    if (callback(element)) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
}


const newArray1 = filterByHasHobbies(4);
console.log(newArray1);

console.log('===================');

const newArray2 = filterByUserLiveInRegion('경기');
console.log(newArray2);

console.log('===================');

// 콜백을 활용한 필터링 예시
// 취미가 2개인 회원들만 필터링
const filter1 = filterUser( user => user.hobbies.length === 2);
console.log(filter1);


console.log('===================');
// 서울에 살면서 이름에 왕이 들어간 사람 필터링
const filter2 = filterUser(function (user) {
  return user.address === '서울' && user.userName.includes('왕')
});
console.log(filter2);

console.log('===================');
// 취미중에 축구가 있는 회원들만 필터링
const filter3 = filterUser(user => user.hobbies.includes('축구'));
console.log(filter3);

console.log('===================');

const filter4 = filter(userList, user => user.address === '경기');
console.log(filter4);

const numbers = [1,2,3,4,5,6,7,8,9];

// numbers에서 홀수들만 새 배열에 다시 담아줘
const filter5 = filter(numbers, n => n % 2 === 1);
console.log(filter5);

const names = ['홍길동', '김철수', '김뽀삐', '이뚜뚜', '홍뽀로로', '박짜짜'];

// names에서 김씨들만 뽑아서 새 배열에 담아줘
const filter6 = filter(names, name => name.includes('김'));
console.log(filter6);
