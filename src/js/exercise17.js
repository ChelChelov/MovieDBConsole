'use strict';

function amountOfPages(summary){
	if (summary <= 9) {
		return summary;
	}

	let sum = 0;

	for (let i = 1; i <= summary; i++) {
		let currentNum = `${i}`;
		sum += currentNum.length;
		if ((sum == summary) || (sum == summary - 1)) {
			return Number(currentNum);
		}
	}
}

console.log(amountOfPages(1095));