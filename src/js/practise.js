'use strict';

// console.log( NaN || 2 || undefined );
// console.log( NaN && 2 && undefined );
// console.log( 1 && 2 && 3 );
// console.log( !1 && 2 || !3 );
// console.log( 25 || null && !3 );
// console.log( NaN || null || !3 || undefined || 5);
// console.log( NaN || null && !3 && undefined || 5);
// console.log( 5 === 5 && 3 > 1 || 5);

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// } else {
// 	console.log('Next time');	
// }

// let num = 50;

// for(let i = num; i <= 55; i++) {
// 	console.log(num);
// 	num++;
// }

// let result = '';
// const length = 6;

// for(let i = 1; i <= length; i++) {
// 	for(let j = 1; j <= i; j++) {
// 		result += '*';
// 	}
// 	result += '\n';
// }
// console.log(result);

// При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

for(let i = 5; i <= 10; i++){
	console.log(i);
}

// При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

for(let i = 20; i >= 10; i--){
	if(i === 13){
		break;
	}
	console.log(i);
}

// При помощи цикла for выведите чётные числа от 2 до 10 включительно

for(let i = 2; i <= 10; i++){
	if(i % 2 === 0){
		console.log(i);
	}
}

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }
//3, 5, 7, 9, 11, 13, 15

// let num = 2;
// while(num <=16){
// 	if(num % 2 !== 0){
// 		console.log(num);
// 	}
// 	num++;
// }

// Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

const arrayOfNumbers = [];
let num = 5;
for(let i = 0; i <= 5; i++){
	arrayOfNumbers[i] = num;
	num++;
}

// Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for(let i = 0; i <= arr.length - 1; i++){
// 	result[i] = arr[i];
// }

// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for(let i = 0; i <= data.length - 1; i++){
// 	if(typeof(data[i]) === 'number') {
// 		data[i] = data[i] * 2;
// 	} else {
// 		data[i] = data[i] + ' - done';
// 	}
// }
// console.log(data);

// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for(let i = 0; i <= data.length - 1; i++){
// 	result[i] = data[data.length - 1 - i];
// }

// console.log(result);

const lines = 5;
let result = '';

for(let i = 0; i <= 6; i++){
	for(let j = i; j <= lines; j++){
		if(j === lines){
			for(let k = i; k >= 0; k--){
				result += '*';
				if(k > 0){
					result += '*';
				}
			}
		}
		result += ' ';
	}
	result += '\n';
}
console.log(result);

//Functions

function returnNeighboringNumbers(number) {
	number = number - 1;
	const arr = [];
	for (let i = 0; i <= 2; i++) {
		arr[i] = number;
		number++;
	}
	return arr;
}
console.log(returnNeighboringNumbers(5));

function getMathResult(num, count) {
	if (typeof(count) !== 'number' || count <= 1) {
		return num;
	} 

	let str = num;
	let a = num;

	for (let i = 2; i <= count; i++) {
		a = num * i;
		str = str + '---' + a;
	}
	return str;
}

console.log(getMathResult(3, 6)); 

const str = 'test';

str[2] = 'd';
console.log(str);

const fruit = 'some fruit';
console.log(fruit.slice(5, 8));

const test = '12.2px';
console.log(parseFloat(test));


function calculateVolumeAndArea(edgeLength) {
	const length = parseFloat(edgeLength);
	if (length === 'NaN' || length <= 0 || Math.floor(length) !== length) {
		return  'При вычислении произошла ошибка';
	}
	const volume = length * length * length;
	const area = 6 * length * length;

	return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

console.log(calculateVolumeAndArea(15.5));

function getCoupeNumber(num) {
	if (typeof num !== 'number' || num < 0 || Math.floor(num) !== num) {
		return 'Ошибка. Проверьте правильность введенного номера места';
	} else if (num === 0 || num > 36) {
		return 'Таких мест в вагоне не существует';
	} else {
		let coupe = 1;
		let numbers = 4;
		for (let i = 1; i <= 36; i++) {
			if (num <= numbers) {
				return coupe;
			} 
			if (i > numbers) {
				numbers = numbers + 4;
				coupe++;
			}
		}
		return coupe;
	}
}

console.log(getCoupeNumber(16));


function getTimeFromMinutes(time) {
	if (typeof time !== 'number' || time < 0 || time > 600 || Math.floor(time) !== time) {
		return 'Ошибка, проверьте данные';
	}

	let hours = parseInt(time / 60);
	let minutes = time - 60 * hours;

	switch (hours) {
        case 1:
            return `Это ${hours} час и ${minutes} минут`;
        case 2:
        case 3:
        case 4:
            return `Это ${hours} часа и ${minutes} минут`;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            return `Это ${hours} часов и ${minutes} минут`;
        default:
            return `Это ${hours} часов и ${minutes} минут`;
    }
}

console.log(getTimeFromMinutes(150));


function findMaxNumber(a, b, c, d) {
	let max = a;
	const arr = [a, b, c, d];
	for (let i = 0; i <= arr.length - 1; i++) {
		if (typeof arr[i] !== 'number' || arr[i] === null || arr[i] === '') {
			return 0;
		}
		if (arr[i] >= max) {
			max = arr[i];
		}
	}
	return max;
}

console.log(findMaxNumber(111, 77, 66.6, 11));


function fib(num) {
	if (typeof num !== 'number' || num === null || num <= 0 || Math.floor(num) !== num) {
		return '';
	}
	if (num === 1) {
		return '0';
	}
	let str = '0 1';
	let a = 0;
	let b = 1;
	let res;
	for(let i = 1; i <= num - 2; i++) {
		res = a + b;
		b = res;
		a = res - a;
		str += ` ${res}`;
	}
    return str;
}

console.log(fib(2));

// 0 + 1 = 1; b = 1 a = 1  	0 1 1
// 1 + 1 = 2; b = 2 a = 1  	0 1 1 2            
// 1 + 2 = 3; b = 3 a = 2  	0 1 1 2 3
// 2 + 3 = 5; b = 5 a = 3		0 1 1 2 3 5
// 3 + 5 = 8; b = 8 a = 5  	0 1 1 2 3 5 8
// 5 + 8 = 13; b = 13 a = 8    0 1 1 2 3 5 8 13
