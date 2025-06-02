

// 이 파일은 브라우저에서 실행해주세요

while (true) {
  let n = prompt('정수: ');
  if (n === '그만') break; // exit -> 나가
  if (n === 'ㅋㅋㅋㅋ') {
    alert('뭘 웃어 ㅋ');
    continue; // skip -> 위로 올라가서 다시첨부터
  }
  alert(`당신이 입력한 숫자: ${n}`);
}
alert('안녕히 계세요!!');
