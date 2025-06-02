
// 난수 : 랜덤값
// 0.0 이상  1.0미만의 랜덤 숫자를 생성해줌
let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(`rn: ${randomNumber}`);

// 랜덤 정수 만들기 (1 ~ 10)
/*
    Math.floor() : 소수점 버림

    Math.random()                         0.0 <= ~ < 1.0
    Math.random() * 10                    0.0 <= ~ < 10.0
    Math.floor(Math.random() * 10)        0  <= ~  < 10
    Math.floor(Math.random() * 10) + 1    1  <= ~  < 11

    117 ~ 132사이의 난수
    x ~ y 사이의 난수 (이상이하개념)

    Math.floor(Math.random() * (y - x + 1)) + x;
 */

// 117 ~ 132
let damage = Math.floor(Math.random() * (132 - 117 + 1)) + 117;
console.log(`damage: ${damage}`);

// 1 ~ 46 사이 난수 생성
let lottoNum = Math.floor(Math.random() * 46) + 1;
console.log(`lotto: ${lottoNum}`);
