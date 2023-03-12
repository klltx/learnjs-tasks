function sumInput() {
  const numbers = [];
  while(true) {
    let number = prompt('Введите число:', 0);
    if(number === null || number === "" || !isFinite(number)) break;

    numbers.push(+number);
  }

  return numbers.reduce((prev, curr) => prev + curr, 0);
}

alert(sumInput());