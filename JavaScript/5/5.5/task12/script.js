function unique(arr) {
  /* ваш код */
  const res = [];
  arr.forEach((word) => {
    if(!res.includes(word)) res.push(word);
  });

  return res;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) ); // кришна, харе, :-O