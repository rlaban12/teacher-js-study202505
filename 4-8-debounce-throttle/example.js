function foo(callback) {
  return (...args) => {
    console.log(args);
    callback(...args);
  };
}

function sayGoodbye(name, hobby) {
  console.log(`${name}의 ${hobby} 이제 그만~~`);
}

const bar = foo(sayGoodbye);
bar('김철수', '수영');


function sayHello(greet) {
  console.log(greet);
}


// const bar = foo(sayHello);
// bar('안녕?');


console.log('===================');

const arr = [1, 2, 3, 4];

function operate(...args) {
  console.log(...args);
}

operate(...arr);

const nums1 = [10, 20, 30];
const nums2 = [100, 200, 300];

const results = [...nums1, ...nums2];
console.log(results);


