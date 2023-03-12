function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

console.log( user.ref.name ); // Каким будет результат?

// При вызове функции makeUser - ref примет значение исходя из контекста функции,
// т.е. будет равно undefined. Т.к. ref = undefined, то вместо переменной name
// мы получим ошибку