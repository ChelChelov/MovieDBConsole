'use strict';

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter(film => film.rating >= 8);
}

function showListOfFilms(arr) {
    const str = arr.reduce((accumulator, current, index) => {
		if (index === 0) {
			return current.name;
		} else {
			return `${accumulator}, ${current.name}`;
		}
	}, '');
	return str;
}

function setFilmsIds(arr) {
	return arr.map((film, index) => Object.assign(film, { id: index }));
}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    return arr.every(film => 'id' in film);
}

console.log(showGoodFilms(films));
console.log(showListOfFilms(films));
console.log(checkFilms(films));
console.log(tranformedArray);