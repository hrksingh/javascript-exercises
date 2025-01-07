const repeatString = function (word, times) {
  if (times < 0) return "ERROR";
  let repeatedWord = "";
  for (let i = 0; i < times; i++) {
    repeatedWord += word;
  }
  return repeatedWord;
};
console.log(repeatString("hey", 3));
// Do not edit below this line
module.exports = repeatString;
