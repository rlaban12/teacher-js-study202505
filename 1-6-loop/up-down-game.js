
// 난이도 입력기회 상수
const DIFFICULT = 4;
const NORMAL = 6;
const EASY = 10;

const MIN = 1, MAX = 100;

// 최소 최대값 변수
let minValue = MIN, maxValue = MAX;

// 1 ~ 100 사이의 무작위 난수 생성
let secret = Math.floor(Math.random() * MAX) + MIN;

// 입력 남은 기회 총 카운트 저장
let countDown;

while (true) {

// 난이도 선택 입력창
  let level = prompt(`
  난이도를 선택하세요!
  [1. 상 (${DIFFICULT}번의 기회) | 2. 중 (${NORMAL}번의 기회) | 3. 하 (${EASY}번의 기회)]
  `);

  switch (level) {
    case '상':
    case '1':
      countDown = DIFFICULT;
      break;
    case '중':
    case '2':
      countDown = NORMAL;
      break;
    case '하':
    case '3':
      countDown = EASY;
      break;
    default:
      alert('난이도를 다시 입력해주세요!');
      continue;
  }
  break; // default가 아닐 경우 작동
}



while (true) {
  // 사용자가 입력한 정답을 저장
  let rangeText = `${minValue} ~ ${maxValue}`;
  if (minValue === maxValue) {
    rangeText = minValue;
  }
  let userAnswer = +prompt(`# 숫자를 입력하세요! [ ${rangeText} ]`);

  // 입력값 검증
  if (userAnswer < minValue || userAnswer > maxValue) {
    alert('범위 안의 값을 입력하세요.');
    continue;
  }

  // 정답을 판별하는 조건 로직
  if (secret === userAnswer) { // 정답인 경우
    alert('정답입니다!');
    break;
  } else if (secret > userAnswer) { // UP인 경우
    alert('UP!!');
    minValue = userAnswer + 1;
  } else { // DOWN인 경우
    alert('DOWN!!');
    maxValue = userAnswer - 1;
  }

  countDown--; // 입력 횟수 1회 차감

  // 입력 횟수 소진 게임 종료
  if (countDown === 0) {
    alert('기회가 모두 소진되었습니다. ㅋㅋㅋㅋ Bye~');
    break;
  } else {
    if (countDown === 1) {
      alert('마지막 기회입니다. 집중하세요!!');
    } else {
      alert(`${countDown}번의 기회가 남았습니다.`);
    }
  }
}


//========== v1.0 시나리오 =================
// 1 ~ 100 사이의 랜덤한 숫자하나가 정답으로 주어진다.
// 사용자는 이 사이의 숫자를 입력할 수 있어야 한다.
// 시스템은 입력한 숫자를 판단하여 up인지 down인지 알려줘야 한다.
// 만약 정답을 맞추지 못하면 지속해서 입력을 받고 결과를 알려준다.
// 정답을 맞추면 맞췄다는 메시지와 함께 프로그램을 종료한다.

//========== v1.1 시나리오 =================
// 사용자들은 입력 기회가 5번으로 제한된다.
// 즉, 5번 안에 정답을 맞추지 못할 경우 게임이 강제종료된다.

//========== v1.2 시나리오 =================
// 사용자는 게임 시작전에 난이도를 설정할 수 있다.
// 난이도는 상, 중, 하 난이도가 존재하며 난이도별 입력 횟수제한이 다르다.