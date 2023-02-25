let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(topSalary(salaries));

function topSalary(salaries) {
  let maxSalary = 0;
  let name = null;
  for(let [key, value] of Object.entries(salaries)) {
    if(value > maxSalary) {
      maxSalary = value;
      name = key;
    }
  }

  return name;
}