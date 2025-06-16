

function foo(callback) {
  return (x) => {
    callback(x);
  };
}

function sayHello(greet) {
  console.log(greet);
}

const bar = foo(sayHello);
bar('안녕?');