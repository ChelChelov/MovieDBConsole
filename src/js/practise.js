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

function sayHello(name) {
	return name;
}

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

// console.log( NaN || 2 || undefined );
// console.log( NaN && 2 && undefined );
// console.log( 1 && 2 && 3 );
// console.log( !1 && 2 || !3 );
// console.log( 25 || null && !3 );
// console.log( NaN || null || !3 || undefined || 5);
// console.log( NaN || null && !3 && undefined || 5);
// console.log( 5 === 5 && 3 > 1 || 5);

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

console.log(calculateVolumeAndArea('5'));
