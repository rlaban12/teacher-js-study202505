
const person = {
  name: '홍길동',
  age: 30
};

const copyPerson = { ...person };

person.age = 40;
person.occupation = '개발자';

console.log('person: ', person);
console.log('copyPerson: ', copyPerson);

console.log('===================');

const newPerson = {
  ...person,
  hobbies: ['산책', '풋살'],
  age: 20
};
console.log(newPerson);