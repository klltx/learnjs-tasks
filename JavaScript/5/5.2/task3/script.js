function readNumber() {
  let input;

  do {
    input = prompt("Введите число:", 0);
  } while(!isFinite(input))
  
  if (input === null || input === '') return 0;

  return +input;
}

alert(readNumber());