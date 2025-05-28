

console.log('브라우저 연결!!');


/*
  브라우저 전용 입출력 함수: nodejs환경에서는 실행 불가

  alert(): 브라우저 출력창을 띄움
  prompt(): 브라우저 입력창을 띄움
  confirm(): 브라우저 확인/취소창을 띄움
*/
// alert('메롱메롱');

// let userName = prompt('당신의 이름은 무엇입니까?');
// console.log(`입력된 이름: ${userName}`);
// alert(`${userName}님 안녕??`);


let number = prompt('좋아하는 숫자를 쓰세요.');

alert(`당신이 좋아하는 숫자에 100을 더하면 ${+number + 100}입니다. `)

