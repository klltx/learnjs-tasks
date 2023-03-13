const liElems = document.querySelectorAll('li');
let liCount = 0;

for (const li of liElems) {
  console.log(li.firstChild.data);
  liCount += li.querySelectorAll('li').length;
}