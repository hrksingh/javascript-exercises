const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let result = arr.reduce((sum, current) => sum + current, 0);
  return result;
};

const multiply = function (arr) {
  let result = arr.reduce((sum, current) => sum * current, 1);
  return result;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  let sum = 1;
  if (a === 0) {
    return sum;
  }
  while (a > 0) {
    sum = sum * a;
    a--;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
