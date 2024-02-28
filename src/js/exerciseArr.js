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

//Shopping Mall

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 55000
};

function isBudgetEnough(data) {
	let S = 0;

	data.shops.forEach((shop) => {
		S += shop.width * shop.length;
	});

	const V = S * data.height;
	const price = V * data.moneyPer1m3;
	
	if (data.budget - price >= 0) {
		return 'Бюджета достаточно';
	} else {
		return 'Бюджета недостаточно';
	}
}

console.log(isBudgetEnough(shoppingMallData));


//Students

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Sam', 'Takesi'];

function sortStudentsByGroups(arr) {
	let str = 'Оставшиеся студенты: ';
    let groups = [[], [], [], str]; 
    arr = arr.sort();

    for (let i = 0, counter = 0; i < arr.length; i++) {
		if (arr.length == 9 && i == 8) {
			groups[3] += '-';
		}
		if (i >= 9) {
			groups[3] += `${arr[i]}`;
			if (i < arr.length - 1) {
				groups[3] += ', ';
			}
		}
        if (i <= 8) {
			groups[counter].push(arr[i]);
		}
        if (groups[counter].length === 3 && counter < 2) {
            counter++;
        }
    }

    return groups;
}

console.log(sortStudentsByGroups(students));


// let groups = [[], [], [], ''];

// let count = 0;

// groups[count].push(students[0]);

// students.push('Peter');

// console.log(groups);
