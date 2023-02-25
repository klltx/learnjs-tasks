function camelize(str) {
  return str.split('-').map((word, i) => {
    if(i === 0) return word;

    return word[0].toUpperCase() + word.slice(1);
  }).join('');
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));