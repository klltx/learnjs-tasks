function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

function checkAge1(age) {
  return age > 18 ? true : 'Родители разрешили?'
}

function checkAge2(age) {
  return age > 18 || 'Родители разрешили?'
}