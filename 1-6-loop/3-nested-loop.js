
for (let i = 0; i < 3; i++) { // 3번 반복
  console.log(`hello`);
  for (let j = 0; j < 4; j++) { // 3*4번 반복
    console.log(`bye - (${i}, ${j})`);
    for (let k = 0; k < 2; k++) { // 2번
      // code... 3 * 4 * 2번 반복
    }
    // code -> 12번 반복
  }
  // code -> 3번반복
}



// 구구단 2~9단 출력
/*for(let level = 2; level <= 9; level++) {
  console.log(`========= 구구단 ${level}단 =========`);
  for (let line = 1; line <= 9; line++) {
    console.log(`* ${level} x ${line} = ${level * line}`);
  }
  console.log('==============================');
}*/



