'use strict';

const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	}
};

options['weight'] = 50;

// console.log(options.weight);

// for (let key in options) {
// 	console.log(`Property ${key} is ${options[key]}`);
// }

// console.log(Object.keys(options).length);

options['makeTest'] = function() {
	console.log('Test');
};

options.makeTest();


const arr = [1, 2, 3, 6, 8];

// arr.pop();

// console.log(arr);

// arr.forEach(function(item, i, arr) {
// 	console.log(`${i}: ${item} inside array ${arr}`);
// });

arr.forEach(function() {});
