console.log(sum(1)(2))
console.log(sum(5)(-1))

function sum(x) {
  return function (y) {
    return x + y;
  }
}