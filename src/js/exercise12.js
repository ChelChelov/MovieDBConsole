'use strict';

const someString = 'This is some strange string';

function reverse(str) {
	if (typeof str !== 'string') {
		return 'Ошибка!';
	}
	let arr = str.split('');
	let revStr = '';

	for (let i = arr.length - 1; i >= 0; i--) {
		revStr += arr[i];
	}

	return revStr;
}

console.log(reverse(someString));


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
	if (arr.length < 1) {
		return 'Нет доступных валют';
	}

	let str = 'Доступные валюты:\n';

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == missingCurr) {
			continue;
		}
		str += `${arr[i]}\n`;
	}

	return str;
}

console.log(availableCurr(['UAH', 'RUB', 'CNY'], 'CNY'));