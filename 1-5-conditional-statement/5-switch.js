
let weekDay = 'Monday';
let myName = '홍길동';

switch (weekDay) {
  // case myName:  case에는 변수말고 상수만
  case '월요일': case 'Monday':
    console.log('새로운 한 주가 시작되었습니다.');
    break;
  case '화요일': case 'TuesDay':
    console.log('화이팅 오늘도 좋은 하루~');
    break;
  case '수요일':
    console.log('주중의 절반을 넘었어요!');
    break;
  case '목요일':
    console.log('거의 주말이 다왔네요.');
    break;
  case '금요일':
    console.log('주말 전 마지막 업무 화이팅!');
    break;
  default:
    console.log('주말입니다. 푹 쉬세요!!');
}