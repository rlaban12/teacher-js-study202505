
// ===== 전역 상태 관리 ===== //

// 게임에 필요한 데이터들을 하나의 객체로 묶어서 관리
const gameData = {
  secretNumber: Math.floor(Math.random() * 100) + 1, // 1 ~ 100 사이 무작위 숫자
  userAnswer: 0, // 사용자의 입력
  remainingChanges: 10, // 남은 기회
  minRange: 1, // 범위의 최소값
  maxRange: 100, // 범위의 최대값
  guessHistory: [], // 사용자의 추리 기록 로그
};

// ======= DOM 가져오기 ====== //
const $guessForm = document.getElementById('guess-form');
const $guessInput = document.getElementById('guess-input');
const $begin = document.getElementById('begin');
const $end = document.getElementById('end');
const $chancesLeft = document.getElementById('chances-left');
const $feedback = document.getElementById('feedback');
const $historyList = document.getElementById('history-list');

const $finishModal = document.getElementById('finish-modal');
const $finishTitle = document.getElementById('finish-title');
const $finishText = document.getElementById('finish-text');
const $restartBtn = document.getElementById('restart-button');


// ==== 게임 로직 함수 정의 ==== //

// 피드백 텍스트를 처리하는 함수
function updateFeedback(feedbackText, feedbackClass) {
  $feedback.textContent = feedbackText;
  $feedback.classList.remove('up', 'down', 'correct');
  if (feedbackClass) $feedback.classList.add(feedbackClass);
}

// 1. 업다운 정답 판정 로직
function judgeGuess() {
  const { secretNumber, userAnswer } = gameData;

  // GAME OVER 처리
  if (gameData.remainingChanges === 0) {
    showFinishModal(false);
    return;
  }



  // 값 비교
  // 정답인 경우
  if (secretNumber === userAnswer) {
    // 피드백 텍스트를 업데이트
    updateFeedback('정답입니다!', 'correct');

    // 로그 기록
    gameData.guessHistory.push({
      guess: userAnswer,
      resultText: '정답',
      resultClass: 'correct'
    });

    // 모달 띄우기
    showFinishModal();
  } else {
    // 정답이 아닌 경우 UP 또는 DOWN
    const result = userAnswer < secretNumber ? 'UP' : 'DOWN';
    updateFeedback(`${result}!!`, result.toLowerCase());

    // 범위 업데이트
    if (result === 'UP') {
      gameData.minRange = userAnswer + 1;
    } else {
      gameData.maxRange = userAnswer - 1;
    }

    // 로그 배열에 로그 기록 쌓기
    gameData.guessHistory.push({
      guess: userAnswer,
      resultText: result,
      resultClass: result.toLowerCase()
    });

    // 자동 정답인 경우
    if (
      gameData.minRange === gameData.maxRange
      && gameData.remainingChanges > 0
    ) {
      updateFeedback(`정답은 ${gameData.minRange}밖에 없네요!`, 'correct');
      showFinishModal();
    }

    // 모든 판정이 끝난 후 UI 업데이트
    updateUI();
  }

}

// 2. UI 업데이트 로직
function updateUI() {
  // 범위값 리렌더링
  $begin.textContent = gameData.minRange;
  $end.textContent = gameData.maxRange;

  $guessInput.min = gameData.minRange;
  $guessInput.max = gameData.maxRange;

  // 남은 기회 리렌더링
  $chancesLeft.textContent = gameData.remainingChanges;

  // 로그 렌더링
  $historyList.innerHTML = '';
  gameData.guessHistory.forEach(({ guess, resultText, resultClass }) => {
    const $li = document.createElement('li');
    $li.classList.add('history-item', resultClass);
    $li.textContent = `${guess} (${resultText})`;

    $historyList.prepend($li);
  });

  // 인풋 초기화
  resetInput();
}

// 3. 모달을 제어하는 로직
function showFinishModal(isCorrect = true) {
  setTimeout(() => {

    $finishModal.classList.add('show');
    $finishText.textContent = `정답은 ${gameData.secretNumber}였습니다!`;

    if (isCorrect) {
      $finishTitle.textContent = `Congratulation!`;
      $finishTitle.style.color = 'var(--success-color)';
    } else {
      $finishTitle.textContent = `GAME OVER`;
      $finishTitle.style.color = 'var(--danger-color)';
    }

  }, 1000);
}

function resetInput() {
  $guessInput.value = '';
  $guessInput.focus();
}

// 4. 게임을 재시작하는 로직
function initializeGame() {
  // 데이터 리셋
  gameData.secretNumber = Math.floor(Math.random() * 100) + 1;
  gameData.remainingChanges = 10;
  gameData.minRange = 1;
  gameData.maxRange = 100;
  gameData.guessHistory = [];

  console.log(`정답: ${gameData.secretNumber}`);

  // UI 리셋
  updateFeedback('추리를 시작하세요', '');
  $finishModal.classList.remove('show');
  updateUI();
}

// 숫자 입력을 검증하는 함수
function isValidate(userGuess) {
  if (
    isNaN(userGuess)
    || userGuess < gameData.minRange
    || userGuess > gameData.maxRange
  ) {
    alert(`반드시 ${gameData.minRange}와 ${gameData.maxRange} 사이의 숫자를 입력하세요!`);
    resetInput();
    return false;
  }
  return true;
}

// ==== 이벤트 리스너 설정 ==== //

// 1. 숫자를 입력하고 도전을 클릭하는 이벤트
$guessForm.addEventListener('submit', e => {

  // form의 새로고침 기능을 방지
  e.preventDefault();

  // 사용자가 입력한 숫자를 읽기
  const userGuess = +$guessInput.value;

  // 입력값 검증
  if (!isValidate(userGuess)) return;

  // 입력기회 차감
  gameData.remainingChanges--;
  gameData.userAnswer = userGuess;

  // 판정
  judgeGuess();

});

// 2. 게임 재시작 이벤트
$restartBtn.addEventListener('click', e => {
  initializeGame();
});

// ==== 실행 코드 ==== //
initializeGame();