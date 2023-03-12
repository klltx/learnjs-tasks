function getSecondsToTomorrow() {
  let date = new Date();
  let secondsToday = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
  let secondsDay = 24 * 3600;
  return secondsDay - secondsToday;
}

console.log(getSecondsToTomorrow());