
let score = +prompt('점수를 입력하세요');

let grade;
if (score >= 90) {
  grade = 'A';
} else if (score >= 80) {
  grade = 'B';
} else if (score >= 70) {
  grade = 'C';
} else if (score >= 60) {
  grade = 'D';
} else {
  grade = 'F';
}

alert(grade); // 예상 출력: A
