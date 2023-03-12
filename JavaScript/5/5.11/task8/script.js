function formatDate(date) {
  const resDate = new Date(new Date() - date);
  if(resDate < 1000) return "прямо сейчас";
  
  if(resDate < 60 * 1000) return `${resDate.getSeconds()} сек. назад`;

  if(resDate < 3600 * 1000) return `${resDate.getMinutes()} мин. назад`;

  const resMin = addZero(date.getMinutes());
  const resHour = addZero(date.getHours());
  const resDay = addZero(date.getDate());
  const resMonth = addZero(date.getMonth() + 1);
  const resYear = addZero(date.getFullYear());

  return `${resDay}.${resMonth}.${resYear}, ${resHour}:${resMin}`;
}

function addZero(num) {
  return num < 10 ? `0${num}` : num;
}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );