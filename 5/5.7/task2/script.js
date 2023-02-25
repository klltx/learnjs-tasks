let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"

function aclean(arr) {
  const map = new Map();

  arr.forEach((word) => {
    map.set(word.toLowerCase().split('').sort().join(''), word);
  });

  return Array.from(map.values());
}