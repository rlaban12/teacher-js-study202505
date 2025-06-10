const traders = [
  {
    trader: {
      name: '김철수', // traders[0].trader.name
      city: '대전',
    },
    year: 2023, // traders[0].year
    value: 500000,
  },
  {
    trader: {
      name: '박영희',
      city: '서울',
    },
    year: 2022, // traders[1].year
    value: 600000,
  },
  {
    trader: {
      name: '김철수',
      city: '대전',
    },
    year: 2022,
    value: 1200000,
  },
  {
    trader: {
      name: '박영희',
      city: '서울',
    },
    year: 2023,
    value: 650000,
  },
  {
    trader: {
      name: '뽀로로',
      city: '부산',
    },
    year: 2023,
    value: 800000,
  },
  {
    trader: {
      name: '루피',
      city: '대전',
    },
    year: 2022,
    value: 780000,
  },
  {
    trader: {
      name: '김철수',
      city: '대전',
    },
    year: 2023,
    value: 1500000,
  },
  {
    trader: {
      name: '김철수',
      city: '대전',
    },
    year: 2022,
    value: 2500000,
  },
  {
    trader: {
      name: '김철수',
      city: '대전',
    },
    year: 2022,
    value: 500000,
  },
  {
    trader: {
      name: '루피',
      city: '대전',
    },
    year: 2023,
    value: 120000,
  },
];

// 1. **2023년에 대전에서 발생한 모든 거래의 총액을 계산해주세요.**

/*let totalInDaejeon2023 = 0;
for (const trs of traders) {
  if (trs.year === 2023 && trs.trader.city === '대전')
    totalInDaejeon2023 += trs.value;
}*/

const totalInDaejeon2023 = traders
  .filter(trs => trs.year === 2023 && trs.trader.city === '대전')
  .reduce((total, trs) => total + trs.value, 0)
;

console.log(`총액: ${totalInDaejeon2023}원`);


// 2. **모든 거래 중 가장 높은 거래액을 가진 거래의
//   거래자 정보(이름, 도시)와 거래액을 출력해주세요.**
console.log('===================');

/*let highestTransaction = traders[0];

for (const trs of traders) {
  if (highestTransaction.value < trs.value) {
    highestTransaction = trs;
  }
}

const {trader, value} = highestTransaction;
const {name, city} = trader;*/

/*const highestTransaction
  = traders.reduce((max, trs) =>
      max.value < trs.value ? trs : max
    );*/

const copyTraders = [...traders];
copyTraders.sort((a, b) => b.value - a.value);

const highestTransaction = copyTraders[0];

const {trader, value} = highestTransaction;
const {name, city} = trader;

console.log(`가장 높은 거래액 정보 - 이름: ${name}, 도시: ${city}, 거래액: ${value}원`);


// 3. **각 도시별로 발생한 총 거래액을 객체 형태로 매핑해주세요.
//   예를 들어, `{서울: 총거래액, 부산: 총거래액}`과 같은 형태입니다.**
console.log('===================');

/*const totalByCity = {};

// 서울 거래 총액 구하기
let totalInSeoul = 0;
let totalInDaejeon = 0;
let totalInBusan = 0;

for (const trs of traders) {
  if (trs.trader.city === '서울') {
    totalInSeoul += trs.value;
  } else if (trs.trader.city === '부산') {
    totalInBusan += trs.value;
  } else if (trs.trader.city === '대전') {
    totalInDaejeon += trs.value;
  }
}
totalByCity['서울'] = totalInSeoul;
totalByCity['대전'] = totalInDaejeon;
totalByCity['부산'] = totalInBusan;

console.log(totalByCity);*/

// 결과 그룹핑 객체
/*
const totalByCity = {};

for (const trs of traders) {
  const city = trs.trader.city;

  // 처음 등장한 도시인가?
  if (totalByCity[city] === undefined) {
    // 도시를 key로 거래액을 value로 새 프로퍼티 추가
    totalByCity[city] = trs.value;
  } else { // 이미 한번 이상 저장된 도시
    totalByCity[city] += trs.value;
  }
}

console.log(totalByCity);
*/

/*const totalByCity = traders.reduce((cityObj, trs) => {
  const city = trs.trader.city;
  if (cityObj[city] === undefined) {
    cityObj[city] = trs.value;
  } else {
    cityObj[city] += trs.value;
  }
  return cityObj;
}, {});*/

const totalByCity = traders.reduce((cityObj, trs) => {
  const city = trs.trader.city;
  cityObj[city] = (cityObj[city] || 0) + trs.value;
  return cityObj;
}, {});

console.log(totalByCity);


// 4. **각 도시에서 진행된 거래의 수를 계산해주세요.
//   결과는 `{도시이름: 거래수}` 형태의 객체여야 합니다.**
console.log('===================');

const trsCountByCity = traders.reduce((cityObj, { trader }) => {
  const {city} = trader;
  if (cityObj[city] === undefined) {
    cityObj[city] = 1;
  } else {
    cityObj[city]++;
  }
  return cityObj;
}, {});

console.log(trsCountByCity);



// 5. **거래액을 기준으로 모든 거래를 오름차순으로 정렬한 후,
//   정렬된 리스트를 출력해주세요.
//   각 거래 정보는 거래자 이름, 도시, 연도, 거래액을 포함해야 합니다.**
console.log('===================');

const sortedTraders = [...traders];

sortedTraders.sort((a, b) => a.value - b.value);
console.log(sortedTraders);
console.log('===================');
// console.log(traders);





// 1. **2023년에 대전에서 발생한 모든 거래의 총액을 계산해주세요.**

// 2. **모든 거래 중 가장 높은 거래액을 가진 거래의
//   거래자 정보(이름, 도시)와 거래액을 출력해주세요.**

// 3. **각 도시별로 발생한 총 거래액을 객체 형태로 매핑해주세요.
//   예를 들어, `{서울: 총거래액, 부산: 총거래액}`과 같은 형태입니다.**

// 4. **각 도시에서 진행된 거래의 수를 계산해주세요.
//   결과는 `{도시이름: 거래수}` 형태의 객체여야 합니다.**

// 5. **거래액을 기준으로 모든 거래를 오름차순으로 정렬한 후,
//   정렬된 리스트를 출력해주세요.
//   각 거래 정보는 거래자 이름, 도시, 연도, 거래액을 포함해야 합니다.**
