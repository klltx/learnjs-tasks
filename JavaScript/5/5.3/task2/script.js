console.log(checkSpam('buy ViAgRA now'))
console.log(checkSpam('free xxxxx'))
console.log(checkSpam("innocent rabbit"))

function checkSpam(str) {
  return str.toLowerCase().includes('viagra') || str.toUpperCase().includes('XXX');
}