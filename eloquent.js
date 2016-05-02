Minimum:

function min(x, y) {
  if (x < y) {
    return x;
  }
  else if (x > y) {
    return y;
  }
  else {
    return x, y;
  }
};

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


Recursion:

function isEven(N) {
  if (N === 0 || N%2 === 0) {
    return true;
  }
  else if (N === 1) {
    return false;
  }
  else {
    return false;
  }
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false


Bean Counting:

function countBs(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'B') {
      count = count + 1;
    }
  }
  return count;
};
function countChar(str, char) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count = count + 1;
    }
  }
  return count;
};

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4