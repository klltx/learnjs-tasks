console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))

console.log(truncate("Всем привет!", 20))

function truncate(str, maxlength) {
  if(str.length > maxlength) {
    return str.substr(0, maxlength - 1) + '…';
  }

  return str;
}