let i = 0;

setTimeout(() => alert(i), 100); // после цикла, alert выведет 100000000, 
// т.к. setTimeout запускается после выполнения остального кода

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
  i++;
}