
// 우리 집 강아지 2마리 - 초코, 해피
let dogName1 = '초코';
let dogName2 = '해피';
let dogAge1 = 3;
let puppyAge2 = 5;
let tall1 = 30;
let height2 = 45;
let inject = false;
let inject2 = true;

let dog1 = ['초코', 3, 30, 10, 1.2, false, true];

// 객체
let myDog1 = {
  name: '초코',
  age: 3,
  tall: 30,
  weight: 10,
  injection: false,
  vegetarian: true,
  favorites: ['산책', '간식']
};

let myDog2 = {
  name: '해피',
  weight: 14,
  tall: 45,
  age: 5,
  favorites: ['꼬리흔들기', '뒷발로까기', '초코괴롭히기'],
  injection: true,
  vegetarian: false,
};

// 객체 프로퍼티 참조법
console.log(myDog1.name);
console.log(myDog2.name);
console.log(myDog2.age);

console.log(typeof myDog1);
console.log(typeof myDog1.name);
console.log(typeof myDog2.injection);
console.log(typeof myDog2.favorites);
console.log(typeof myDog2.favorites[1]);

myDog2.age++;
myDog1.tall **= 2;

myDog1.favorites.push('메롱메롱');
// myDog2.pop();
// myDog1.favorites[0]--;

console.log('===================');

// 프로퍼티 참조법 2
console.log(myDog2['name']);
console.log(myDog2["age"]);

let height = 'tall';

console.log(myDog1[height]);

console.log('===================');
let key = 'age';
console.log(myDog2[key]);

let myCat = {
  name: '나비',
  age: 4,
  'my-hobby': '시비걸기'
};

let divStyle = {
  color: 'red',
  background: 'orange',
  'font-size': '16px'
};

console.log(divStyle['color']);
console.log(divStyle['font-size']);

