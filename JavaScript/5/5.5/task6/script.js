let calc = new Calculator;

console.log( calc.calculate("3 + 7") ); // 10
console.log( calc.calculate("3 - 7") );

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8

function Calculator() {
  this.calculate = (str) => {
    const items = str.split(' ');

    return this[items[1]](+items[0], +items[2]);
  };

  this["+"] = (a, b) => a + b;
  this["-"] = (a, b) => a - b;

  this.addMethod = (name, func) => {
    this[name] = func;
  };
};