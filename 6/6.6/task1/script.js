function makeCounter() {

  function counter() {
    return counter.count++;
  };
  
  counter.count = 0;

  counter.set = (value) => {
    counter.count = value;
    return counter.count;
  };

  counter.decrease = () => {
    counter.count--;
    return counter.count;
  };

  return counter;
}

let counter = makeCounter();

counter.count = 10;
console.log( counter() ); // 10
console.log( counter.set(24) );
console.log( counter.decrease() );