function f(a) {
  console.log(a)
}

const throttle = (f, ms) => {
  let isReady = true;
  let bufThis;
  let bufArgs;

  function wrapper(...args) {
    if(!isReady) {
      bufThis = this;
      bufArgs = args;
      return;
    }

    f.apply(this, args);

    isReady = false;

    setTimeout(() => {
      isReady = true;
      if(bufArgs) {
        wrapper.apply(bufThis, bufArgs);
        bufThis = null;
        bufArgs = null;
      }
    }, ms);
  }

  return wrapper;
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано