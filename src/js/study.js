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

console.log(typeof(+null));



function createCounter() {
	let counter = 0;

	const myFunction = function() {
		counter = counter + 1;
		return counter;
	};

	return myFunction;
}

const increment = createCounter();
const increment2 = createCounter();

// const c1 = increment();
// const c2 = increment();
// const c3 = increment();

// console.log(c1, c2, c3);

console.log(createCounter());
console.log(increment, increment2);
console.log(increment(), increment2(), increment());

// const c1 = createCounter();
// const c2 = createCounter();
// const c3 = createCounter();

// console.log(c1(), c2(), c3());
// console.log(c1(), c2(), c3());




let user = {
    name1: 'Alex',
    age: 25
};
// const {name1, age} = user;

user.name1 = 'Oleg';
console.log(user.name1);
