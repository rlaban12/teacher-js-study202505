

// ====== 함수 정의 영역 ======= //

// 용사 데이터들을 생성하는 클로저 정의
function createHero(name, specialMove) {
  // 현재 체력
  let health = 100;
  // 최대 체력
  let maxHealth = 100;

  return {
    takeDamage: (damage) => {
      // 두 개의 인자 중 큰값을 리턴
      health = Math.max(0, health - damage);
      if (health === 0) {
        return `💥 ${name}은(는) ${damage}의 데미지를 입고 쓰러졌다...`;
      }
      return `🩸 ${name}은(는) ${damage}의 데미지를 입었다! (남은 HP: ${health})`;
    }, // 피해를 입었을 때 발동
    heal: (amount) => {
      if (health === 0) {
        return '이미 쓰러진 용사는 회복할 수 없습니다.';
      }
      health = Math.min(maxHealth, health + amount);
      return `✨ ${name}은(는) ${amount}의 체력을 회복했다! (현재 HP: ${health})`;
    }, // 회복했을 때 발동
    attack: () => `${name}의 일반 공격! ⚔️`, // 일반공격시 발동
    useSpecialMove: () => `"${specialMove}!!"을(를) 외치며 ${name}이(가) 강력한 공격을 날립니다! 🔥`, // 필살기 발동
    getStatus: () => ({ name, health, maxHealth }), // 자기 정보 가져오기
  };
}

// 로그를 화면에 출력하는 함수 정의
function addLog($logDiv, message) {
  const $logEntry = document.createElement('div');
  $logEntry.textContent = message;
  $logEntry.classList.add('log-entry');

  $logDiv.append($logEntry);

  // 새 로그가 찍히면 자동으로 스크롤을 최하단에 위치
  $logDiv.scrollTop = $logDiv.scrollHeight;
}

// 영웅 상태정보 UI 업데이트 함수
function updateHeroStatus($statusDiv, hero, $buttons) {
  // 현재 영웅의 체력이나 이름정보를 알아와야 하는데
  // 이건 클로저가 생성한 영웅정보를 받아와야 알 수 있다.
  const { name, health, maxHealth } = hero.getStatus();
  if (health === 0) {
    $statusDiv.textContent = `${name}이(가) 쓰러졌습니다.`;
    // 모든 버튼 잠그기
    $buttons.forEach($btn => $btn.disabled = true);
    return;
  }
  $statusDiv.textContent = `🛡️ ${name} | HP: ${health} / ${maxHealth}`;
}


// 패널을 설정하는 함수 정의
function setUpHeroPanel(panelId) {
  // console.log(`${panelId}번 용사 패널 설정을 시작합니다.`);
  // 용사 생성 버튼 가져오기
  const $createBtn = document.getElementById(`btn-create-${panelId}`);
  // 이름 입력태그 가져오기
  const $nameInput = document.getElementById(`hero-name-${panelId}`);
  // 필살기 입력태그 가져오기
  const $moveInput = document.getElementById(`special-move-${panelId}`);

  // 전투화면 영역 가져오기
  const $arenaDiv = document.getElementById(`arena-${panelId}`);
  // 로그화면 영역 가져오기
  const $logDiv = document.getElementById(`battle-log-${panelId}`);
  // 스테이터스 화면 영역 가져오기
  const $statusDiv = document.getElementById(`hero-status-${panelId}`);

  // 액션버튼들 가져오기
  const $buttons = [...$arenaDiv.querySelector('.button-group').children];

  let hero = null; // 다른 이벤트에서도 영웅정보를 활용

  // 생성 버튼 이벤트 바인딩
  $createBtn.addEventListener('click', e => {
    // console.log(`${panelId}번 용사 생성 버튼 클릭!`);
    // 이름 읽기
    const heroName = $nameInput.value.trim();
    // 필살기 읽기
    const specialMove = $moveInput.value.trim();

    // 입력값 검증
    if (!heroName || !specialMove) {
      alert('이름과 필살기는 필수값입니다!');
      return;
    }

    // console.log(heroName, specialMove);

    // 용사 생성
    hero = createHero(heroName, specialMove);

    // 패널을 닫고 전투화면을 열어주기
    // 생성화면에 hidden 추가
    document.querySelector(`#panel-${panelId} .setup-area`)
      .classList.add('hidden');
    // 전투화면에 hidden 제거
    $arenaDiv.classList.remove('hidden');

    // 용사 소환 로그 찍기
    addLog($logDiv, `✨ 용사 [${heroName}] 소환!`);
    // 스테이터스 업데이트 처리
    updateHeroStatus($statusDiv, hero);
  });

  // 액션버튼들 이벤트 걸기
  $buttons.forEach($btn => {
    $btn.addEventListener('click', e => {
      const id = e.target.id;
      // console.log(id.split('-')[1]);

      let message = '';

      switch (id.split('-')[1]) {
        case 'attack':
          // console.log(hero.attack());
          message = hero.attack();
          break;
        case 'special':
          // console.log(hero.useSpecialMove());
          message = hero.useSpecialMove();
          break;
        case 'damage':
          // console.log('피해받음!');
          // 랜덤 데미지 생성
          const damage = Math.floor(Math.random() * 6) + 10;
          message = hero.takeDamage(damage);
          break;
        case 'heal':
          message = hero.heal(30);
          break;
      }
      // 상태정보 UI 업데이트
      updateHeroStatus($statusDiv, hero, $buttons);
      addLog($logDiv, message);
    });
  });

}


// ====== 코드 실행 영역 ======= //

// 패널 설정 함수 실행
setUpHeroPanel(1); // 1번용사 패널 설정
setUpHeroPanel(2); // 2번용사 패널 설정