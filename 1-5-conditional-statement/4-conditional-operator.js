

// 돈이 3000원 이상이면 김밥을 먹을 수 있고 미만이면 집밥을 먹어야한다.
// 그런데 먹을 수 있는 음식이름을 변수에 조건부로 저장해야 한다.

let money = 1000;

// 3항 조건 연산자
let foodName = (money >= 3000) ? '김밥' : '집밥';

/*let foodName; // 음식이름을 저장할 변수
if (money >= 3000) {
  foodName = '김밥';
} else {
  foodName = '집밥';
}*/

console.log(`먹을 수 있는 음식: ${foodName}`);

console.log('===================');
let score = 40;

(score >= 60) ? console.log('합격!') : console.log('불합격!');

/*if (score >= 70) {
  console.log('합격!');
} else {
  console.log('불합격!');
}*/

console.log('===================');

let age = 15;

let state = (age >= 20) ? '성인' : (age >= 8) ? '학생' : '아동';

/*let state;
if (age >= 20) {
  state = '성인';
} else if (age >= 8) {
  state = '학생';
} else {
  state = '아동';
}*/


console.log('===================');

let season = '여름';
// 현재 더운 계절인지 여부
let isHot = (season === '여름');

console.log(`현재 더운계절? - ${isHot}`);


