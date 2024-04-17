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
    showAgeAndLangs: function (obj) {
        const {languages} = obj.skills;
        return `Мне ${obj.age} и я владею языками: ${languages.join(' ').toUpperCase()}`;
    }
};

function showExperience(plan) {
	const {exp} = plan.skills;
	return exp;
}

function showProgrammingLangs(plan) {
	let str = '';
	const {programmingLangs} = plan.skills;
	if (Object.keys(programmingLangs).length < 1) {
		return str;
	}
	for (let key in programmingLangs) {
		str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
	}
	return str;
}

console.log(showExperience(personalPlanPeter));
console.log(showProgrammingLangs(personalPlanPeter));
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

