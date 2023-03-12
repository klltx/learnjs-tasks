function sumTo(n) {
  let res = 0;
  for(let i = 1; i <= n; i++) {
    res += i;
  }
  return res;
}


/* самый медленный способ, т.к. каждый рекурсивный 
вызов функции записывает ее контекст в стек

вызвать sumTo(100000) не получится ,т.к. в данном случае 
стек вызова функций будет переполнен.
Максимально можно вызвать до 10000 вложенных функций
*/
function sumTo2(n) {
  return n > 1 ? n + sumTo2(n - 1) : n;
}


// самый быстрый способ, т.к. вычисления происходят без итераций
function sumTo3(n) {
  return (1 + n) * n / 2;
}

console.log(sumTo(1), sumTo(1) === 1)
console.log(sumTo(2), sumTo(2) === 3)
console.log(sumTo(3), sumTo(3) === 6)
console.log(sumTo(4), sumTo(4) === 10)
console.log(sumTo(100), sumTo(100) === 5050)


console.log(sumTo2(100), sumTo2(100) === 5050)

console.log(sumTo3(100), sumTo3(100) === 5050)