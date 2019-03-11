function add (a,b) {
	let sum = a+b;
	return sum;
}

function subtract (a,b) {
	let subs = a-b;
	return subs;	
}

function sum (input) {
		const addition = input.reduce((a, b) => a + b, 0);
		return addition; 	
}

function multiply (input) {
	return input.reduce((a, b) => a * b);
}
function power(a,b) {
	return Math.pow(a,b)	
};

function factorial(input) {
	if (input == 0) return 1;
	let product = 1;
	for (let i = input; i > 0; i--) {
		product *= i;
	}
	return product;
}

console.log(factorial(5));
module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}