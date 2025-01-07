const sumAll = function (to, from) {
  if (to < 0 || from < 0 || !Number.isInteger(to) || !Number.isInteger(from)) {
    return "ERROR";
  }

  // swap values using array destructuring
  if (to > from) [to, from] = [from, to];

  //   if (to > from) {
  //     let temp = from;
  //     from = to;
  //     to = temp;
  //   }

  let sum = 0;
  for (let i = to; i <= from; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
