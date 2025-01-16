const fibonacci = function (number) {
  number = parseInt(number);
  if (number === 0) return 0;
  if (number <= 0) return "OOPS";
  let fib = [1, 1];
  for (let index = 0; index < number - 2; index++) {
    let newNum = fib[index] + fib[index + 1];
    fib.push(newNum);
  }
  return fib[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
