'use strict';

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
	let str;
    if (arr.length < 1) {
		return 'Семья пуста';
	}
	str = `Семья состоит из: ${arr.join(' ')}`;
	return str;
}

console.log(showFamily(family));


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
	for (let val of arr) {
		console.log(val.toLowerCase());
	}
}

standardizeStrings(favoriteCities);


const someString = 'This is some strange string';

function reverse(str) {
	if (typeof str !== 'string') {
			return 'Ошибка!';
	}
	let arr = str.split('');
	let s = '';
	for (let i = arr.length -1; i >= 0; i--) {
		s += arr[i];
	}
	return s;
}

console.log(reverse(someString));


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
	if (arr.length < 1) {
		return 'Нет доступных валют';
	}
	let str = 'Доступные валюты:\n';
	for (let val of arr) {
		if (val === missingCurr) {
			continue;
		}
		str += `${val}\n`;
	}
	return str;
}

console.log(availableCurr([...additionalCurrencies, ...baseCurrencies], 'usd'.toUpperCase()));