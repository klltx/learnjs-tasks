function f() {
  console.log( this ); // null
}

let user = {
  g: f.bind(null) // задаем this = null для функции f
};

user.g();