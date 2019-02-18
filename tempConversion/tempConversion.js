const ftoc = function(fValue) {
  let result = 0;
  //[°C] = ([°F] − 32) × ​5⁄9
  result = (fValue - 32) * 5 / 9;
  return Math.round(result * 10) / 10;
}

const ctof = function(cValue) {
  let result = 0;
  //[°F] = [°C] × ​9⁄5 + 32
  result = cValue * 9/5 + 32;
  return Math.round(result * 10) / 10;

}

module.exports = {
  ftoc,
  ctof
}
