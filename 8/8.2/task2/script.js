function Func(x) {
  this.x = x;
}

// Если перезапишем prototype, то код перестанет правильно работать
Func.prototype = {};

let obj = new Func(0);
let obj2 = new obj.constructor(1);

console.log(obj.x, obj2.x);