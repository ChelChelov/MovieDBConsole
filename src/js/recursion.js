'use strict';

function factorial(arg) {
	if (typeof arg !== 'number' || Math.floor(arg) !== arg) {
		return 'Incorrect type of data';
	}
	if (arg <= 1) {
		return 1;
	}
	return arg * factorial(arg - 1);
}

console.log(factorial(3));