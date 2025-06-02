

// 무한 루프 : 실제로 끝나지 않는 반복문 -> 악성코드
//        언제 끝날지 정확히 모를 때
//      일단 무한히 돌려~~~ 그리고 특정 조건에서 나오게 해

// 랜덤으로 1 ~ 10사이의 정수를 반복생성할건데 7이 나올 때까지 반복할거야
// 반복문의 횟수 : ?

let rn = 0;
let count = 0; // 몇번만에 7이 나오는지 카운트
/*for (; rn !== 7;) {
  rn = Math.floor(Math.random() * 10) + 1;
  count++;
}*/
while ( rn !== 7 ) {
  rn = Math.floor(Math.random() * 10) + 1;
  count++;
}
console.log(`7이 나올때까지 생성한 횟수: ${count}`);





