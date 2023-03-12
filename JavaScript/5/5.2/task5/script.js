console.log(random(1, 5));
console.log( random(1, 5) ); // 1.2345623452
console.log( random(1, 5) ); // 3.7894332423
console.log( random(1, 5) ); // 4.3435234525

function random(min, max) {
  return Math.random() * (max - min) + min;
}