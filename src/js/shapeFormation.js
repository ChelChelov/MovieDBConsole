'use strict';

const lines = 5;
let result = '';
let space = 0;

for (let i = 0; i < lines; i++) {
	for (let j = 0; j < lines; j++) {
		if (lines > space + j) {
			result += ' ';
		} else {
			result += '**';
		}
	}
	result += '*';
	space += 1;
	result += '\n';
}

console.log(result);