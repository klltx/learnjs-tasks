function Accumulator(startingValue = 0) {
  this.value = startingValue;
  this.read = () => {
    this.value += +prompt("Введите число:", 0);
  };
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений