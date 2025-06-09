const userList = [
  {
    account: 'abc1234',
    userName: '대길이',
    job: '추노',
    address: '서울',
    hobbys: ['수영', '축구', '테니스'],
    salary: 5400000,
    age: 35,
  },
  {
    account: 'banana',
    userName: '빠나나',
    job: '과일',
    address: '서울',
    hobbys: ['푸드파이팅', '테니스'],
    salary: 9700000,
    age: 18,
  },
  {
    account: 'park1234',
    userName: '주차왕',
    job: '발렛파킹',
    address: '경기',
    hobbys: ['족구', '축구', '테니스', '영화감상'],
    salary: 3900000,
    age: 56,
  },
  {
    account: 'fire',
    userName: '불꽃남자카리스마',
    job: '게이머',
    address: '서울',
    hobbys: ['독서', '테니스'],
    salary: 1900000,
    age: 42,
  },
];

/**
 * @param callback - 모두가 이 조건에 부합한지 확인할 함수
 * @returns {boolean} - 하나라도 만족하지 않으면 false,
 *                      모두 만족하면 true
 */
function every(callback) {
  // 유저 배열을 순회한다.
  for (const user of userList) {
    // 콜백조건을 실행했을 때 결과가 false인 경우
    if (!callback(user)) {
      // 더 볼 필요 없이 false를 반환한다.
      return false;
    }
  }
  // 반복문이 모두 끝났는데도 리턴이 안나왔다면
  // 모든 요소가 조건에 만족하는 것이므로 최종적으로 true 반환
  return true;
}

function some(callback) {
  // 유저 배열을 순회한다.
  for (const user of userList) {
    // 콜백조건을 실행했을 때 결과가 하나라도 true인 경우
    if (callback(user)) {
      // 더 볼 필요 없이 true를 반환한다.
      return true;
    }
  }
  // 반복문이 모두 끝났는데도 리턴이 안나왔다면
  // 모든 요소가 조건에 만족하는 것 없는것이므로 최종적으로 false 반환
  return false;
}

function none(callback) {
  return !some(callback);
}

// 모든 사용자가 서울에 사는가?
const result1 = every(user => user.address === '서울');  // false
console.log(`result1: ${result1}`);

// 모든 사용자의 취미가 1개 이상인가?
const result2 = every(user => user.hobbys.length > 0);  // true
console.log(`result2: ${result2}`);


// 이름에 '왕'이 포함된 사람이 있는가?
const result3 = some(user => user.userName.includes('왕')); // true
console.log(`result3: ${result3}`);

// 부산에 사는 사용자가 있는가?
const result4 = some(user => user.address === '부산'); // false
console.log(`result4: ${result4}`);


// '게임'이라는 취미를 가진 사용자가 없는가?
const result5 = none(user => user.hobbys.includes('게임')); // true

// 서울에 사는 사용자가 아무도 없는가?
const result6 = none(user => user.address === '서울'); // false
