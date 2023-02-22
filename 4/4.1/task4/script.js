let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function getSum(obj) {
  let sum = 0;
  for (const key in obj) {
    sum += obj[key];
  }
  return sum;
}

console.log(getSum(salaries));