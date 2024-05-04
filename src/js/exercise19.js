'use strict';

function deepCount(a) {

	let count = 0;

	a.forEach(item => {
		if (Array.isArray(item)) {
			count += deepCount(item);
		}
		count++;	
	});
	return count;
}

console.log(deepCount([]));