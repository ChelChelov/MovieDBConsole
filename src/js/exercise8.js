'use strict';

function getTimeFromMinutes(arg) {
	if (typeof arg !== 'number' || arg < 0 || arg > 600 || Math.floor(arg) !== arg) {
		return 'Ошибка, проверьте данные';
	}
	let minutes = arg % 60;
	let hours = (arg - minutes) / 60;

	switch (hours) {
		case 1:
			return `Это ${hours} час и ${minutes} минут`;
		case 0:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
			return `Это ${hours} часов и ${minutes} минут`;
		case 2:
		case 3:
		case 4:
			return `Это ${hours} часа и ${minutes} минут`;
		default:
			return 'Ошибка, проверьте данные';					
	}
}

console.log(getTimeFromMinutes(12.2));

function findMaxNumber(a, b, c, d) {
	let arr = [a, b, c, d];
	let max = -Infinity;

	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] !== 'number') {
			return 0;
		}
		if (max < arr[i]) {
			max = arr[i];
		}
	}
	return max;
}

console.log(findMaxNumber(-50, -5, -6, 6));

