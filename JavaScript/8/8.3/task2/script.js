Function.prototype.defer = function(ms) {
  let bufThis = this;
  const wrapper = (...args) => {
    setTimeout(() => bufThis.apply(this, args), ms);
  }

  return wrapper;
}

function f(a, b) {
  console.log( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.