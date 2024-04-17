'use strict';

function fib(arg) {
	if (typeof arg !== 'number' || arg <= 0 || Math.floor(arg) !== arg) {
		return '';
	}
	let arr = [0, 1];
	let str = '0 1';
	if (arg === 1) {
		return '0';
	}
	if (arg === 2) {
		return str;
	}
	for (let i = 2; i < arg; i++) {
		arr[i] = arr[i - 1] + arr[i - 2];
		str += ` ${arr[i]}`;
	}
	return str;
}

console.log(fib(10));
