const leapYears = function(number) {
    if (number === 0) return false;
    if (number % 4 == 0) return true
    if (number % 4 !== 0) return false

}
console.log(leapYears(2006))
module.exports = leapYears
