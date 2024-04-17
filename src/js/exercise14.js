'use strict';

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Chel', 'Chica'];

function sortStudentsByGroups(arr) {
	let sortArr = arr.sort();
	let team1 = [];
	let team2 = [];
	let team3 = [];
	let str = 'Оставшиеся студенты: ';
	if (sortArr.length === 9) {
		str += '-';
	}

	sortArr.forEach((item, i) => {
		if (team1.length < 3 ) {
			team1.push(item);
		} else if (team2.length < 3) {
			team2.push(item);
		} else if (team3.length < 3) {
			team3.push(item);
		} else {
			str += `${item}`;
			if (sortArr.length > i + 1) {
				str += ', ';
			}
		}
	});

	let newArr = [team1, team2, team3, str];

	return newArr;
}

console.log(sortStudentsByGroups(students));