// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

function multiplyNumeric(obj) {
  for (const key in obj) {
    obj[key] = typeof obj[key] === "number" ? obj[key] * 2 : obj[key];
  }
}

console.log(menu);