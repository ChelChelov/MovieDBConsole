'use strict';

const personalPlanPeter = {
    name: 'Peter',
    age: '29',
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
	showAgeAndLangs : function (obj) {
		return `Мне ${obj.age} и я владею языками: ${obj.skills.languages.join(' ').toUpperCase()}`;
	}
};

function showExperience(plan) {
	const {exp} = plan.skills;
	return exp;
}

function showProgrammingLangs(plan) {
	let result = '';
	const {programmingLangs} = plan.skills;

	if (Object.keys(programmingLangs).length > 0) {
		for (let key in programmingLangs) {
			result += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
		}
	}
	return result;
}

// console.log(showProgrammingLangs(personalPlanPeter));
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// console.log(personalPlanPeter.skills.languages.join(' ').toUpperCase());