const convertToCelsius = function (temp) {
  return roundToOne(((temp - 32) * 5) / 9);
};

const convertToFahrenheit = function (temp) {
  return roundToOne((temp * 9) / 5 + 32);
};

function roundToOne(tempC) {
  return Math.round(tempC * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
