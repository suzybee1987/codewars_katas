var isSquare = function (n) {
  n = Math.sqrt(n)
  if (n = 0) {
    if (Number.isInteger(n)) {
      return true;
    } else {
      return false;
    }
  }
  else {
    return false;
  }
}

console.log(isSquare(25))


var isSquared = function (n) {
  return (Math.sqrt(n) || n == 0 ? true : false);
}

console.log(isSquared(3))