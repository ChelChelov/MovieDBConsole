'use strict';

let numberOfFilms = prompt('How many films you have already watched?', '');
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};
let lastMovie = prompt('What film you had watched recently?', '');
let rate = prompt('How would you rate it?', '');

personalMovieDB['movies'] = {
    lastMovie: rate
};
