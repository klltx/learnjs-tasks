function fib(n) { // работает очень медленно
  return (n === 1) || (n === 2) ? 1 : fib(n - 1) + fib(n - 2);
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757

function fib2(n) {
  let num = 1;
  let numPrev = 1;

  for(let i = 3; i <= n; i++) {
    let numNext = num + numPrev;
    numPrev = num;
    num = numNext;
  }

  return num;
}


console.log(fib2(3)); // 2
console.log(fib2(7)); // 13
console.log(fib2(77)); // 5527939700884757