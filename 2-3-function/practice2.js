/**
 * cm단위를 m로 변환하는 함수
 */
function convertCentiToMeter(cm) {
  return cm / 100;
}

/**
 * bmi값을 전달받아 현재 체중상태를 출력하는 함수
 */
function judgeBMI(bmi) {
  if (bmi > 25) {
    console.log('당신은 과체중입니다.');
  } else if (bmi < 18.5) {
    console.log('당신은 저체중입니다.');
  } else {
    console.log('당신은 정상체중입니다.');
  }
}

/**
 * 키와 몸무게를 전달받아 BMI지수를 계산해서 반환하는 함수
 * @param cm - 신장
 * @param kg - 몸무게
 * @return - 계산된 실수형 BMI지수
 */
function calcBMI(cm, kg) {
  let m = convertCentiToMeter(cm);
  // bmi 계산
  let bmi = kg / (m * m);

  // bmi가지고 저체중 정상체중 판별
  // 판별 분기
  judgeBMI(bmi);

  // bmi 반환
  return bmi;
}

function round(targetNumber, digit=0) {
  /*
    3.7684  ->  x10 => 37.684 => 반올림 38 => / 10 => 3.8
    -> 3.8

    3.7684 -> x 100 => 376.84  => 반올림 377 => / 100 => 3.77
    -> 3.77
   */
  // return Math.round(targetNumber * (10 ** digit)) / (10 ** digit);
  return targetNumber.toFixed(digit);
}


/*
1. 키(cm)와 몸무게(kg)을 인수로 전달받아
2. bmi지수를 계산하여 반환함과 동시에
3. bmi가 25.0이상이면 "당신은 과체중입니다."
  18.5이하면 "당신은 저체중입니다."
  나머지는 "당신은 정상체중입니다."를 출력하는
  CalcBMI라는 함수를 정의하고 호출하세요.
# bmi 계산식 : 몸무게(kg) / (키(m) * 키(m))
# 출력 예시:
"키 -> 178.4cm, 체중-> 78.2kg의 체질량지수는: 24.57입니다"

Math.round(5.78999); // 반올림 -> 6
*/

let h = 178.4,
  w = 78.2;

let myBmi = calcBMI(h, w);

console.log(
  `키 -> ${h}cm, 체중 -> ${w}kg의 체질량지수는 ${round(myBmi, 2)}입니다.`
);
