'use strict';

function calculateVolumeAndArea(arg) {
	if (typeof arg !== 'number' || arg <= 0 || Math.floor(arg) !== arg) {
		return 'При вычислении произошла ошибка';
	}
	const volume = arg * arg * arg;
	const square = 6 * (arg * arg);
	return `Объем куба: ${volume}, площадь всей поверхности: ${square}`;
}

console.log(calculateVolumeAndArea('5'));

function getCoupeNumber(arg) {
	if (typeof arg !== 'number' || arg < 0 || Math.floor(arg) !== arg) {
		return 'Ошибка. Проверьте правильность введенного номера места';
	}
	if (arg === 0 || arg > 36) {
		return 'Таких мест в вагоне не существует';
	}
	let temp = 4;
	let coupeNumber = 1;
	for (let i = 1; i <= arg; i++) {
		if (i === arg) {
			return coupeNumber;
		}
		if (i === temp) {
			temp += 4;
			coupeNumber++;
		}
	}
}

console.log(getCoupeNumber(5));
