function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  console.log(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); // Rabbit, this = rabbit
Rabbit.prototype.sayHi(); // undefined, this = prototype
Object.getPrototypeOf(rabbit).sayHi(); // undefined, this = prototype
rabbit.__proto__.sayHi(); // undefined, this = prototype