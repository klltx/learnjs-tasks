function pow(x, n) {
  let res = 1;
  for (let i = 0; i < n; i++) {
    res *= x;
  }
  return res;
}

const x = +prompt('Введите число', 2)
const n = +prompt('В какую степень возвести число?', 2)

if(n >= 1 && n % 1 === 0) {
  alert(pow(x, n))
} else {
  alert('Данная степень не поддерживается')
}