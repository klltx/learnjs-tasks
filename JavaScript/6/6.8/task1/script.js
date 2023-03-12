function printNumbers(from, to) {
  let num = from;
  let interval = setInterval(() => {
    console.log(num);
    if(num === to) clearInterval(interval)
    num++;
  }, 1000);
}

function printNumbersTimeout(from, to) {
  let num = from;
  setTimeout(function n() {
    console.log(num);
    if(num < to) setTimeout(n, 1000);
    num++;
  }, 1000);
}

printNumbers(4, 7);
printNumbersTimeout(2, 7);