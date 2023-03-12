function sayHi() {
  console.log( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася"
});

console.log( bound.test ); // что выведет? почему?

/*
  Undefined, т.к. bind возвращает новый объект со свойством name: "Вася"
*/