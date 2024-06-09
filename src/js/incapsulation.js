'use strict';

class User {
	constructor(name, age) {
		this.name = name;
		this._age = age;
	}

	#surname = 'Sazonov';

	say = () => console.log(`I am ${this.name} ${this.#surname}, my age is ${this._age}`);

	get age() {
		return this._age;
	}

	set age(age) {
		if (typeof age === 'number' && age > 0 && age < 150) {
			this._age = age;
		} else {
			console.log('Incorrect type');
		}
	}

	get surname() {
		return this.#surname;
	}

	set surname(surname) {
		if (typeof surname === 'string') {
			this.#surname = surname;
		} else {
			console.log('Incorrect type');
		}
	}
}

const newUser = new User(30, 'Oleg');

console.log(newUser.name = 'Elon');
console.log(newUser.age = 'Elon');
console.log(newUser.age = 35);
console.log(newUser.surname = 66);
console.log(newUser.surname = 'Mask');
console.log(newUser.surname);

newUser.say();