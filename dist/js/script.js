'use strict';

const numberOfFilms = prompt('How many films you have already watched?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};
const lastMovie1 = prompt('What film you had watched recently?', ''),
      rate1 = prompt('How would you rate it?', ''),
      lastMovie2 = prompt('What film you had watched recently?', ''),
      rate2 = prompt('How would you rate it?', '');

personalMovieDB.movies[lastMovie1] = rate1;
personalMovieDB.movies[lastMovie2] = rate2;

console.log(personalMovieDB);
