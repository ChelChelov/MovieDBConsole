'use strict';

function factorial(arg) {
	if (typeof arg !== 'number' || Math.floor(arg) !== arg) {
		return 'Incorrect type of data';
	}
	if (arg <= 0) {
		return 1;
	}

	if (arg === 1) {
		return 1;
	} else {
		return arg * factorial(arg - 1); 
	}
}

console.log(factorial(5));