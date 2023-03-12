let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();

// Т.к. функция eat выполняется отностельно rabbit, то и свойство full
// будет присвоено объекту rabbit