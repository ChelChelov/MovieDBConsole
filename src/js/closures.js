'use strict';

function createCounter() {
	let count = 0;

	const myFunc = function() {
		count += 1;
		return count;
	};

	return myFunc;
}

const incr = createCounter();

const c1 = incr();
const c2 = incr();

console.log(c1, c2);