const object = {};

function A() { 
  return object;
}
function B() { 
  return object;
}

let a = new A();
let b = new B();

console.log( a == b ); // true

// Возможно, если функции возвращают одну и ту же ссылку на объект