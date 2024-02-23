'use strict';

let numberOfFilms; 

function start() {
	numberOfFilms = prompt('How many films you have already watched?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = prompt('How many films you have already watched?', '');
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyMovies () {
	for (let i = 0; i < 2; i++) {
		const lastMovie = prompt('What film you had watched recently?', '').trim(),
			rate = prompt('How would you rate it?', '').trim();
	
		if (lastMovie != null && rate != null && lastMovie != '' && rate != '' && lastMovie.length < 50) {
			personalMovieDB.movies[lastMovie] = rate;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}	
	}
}

rememberMyMovies();

function countOfMovies() {
	if (personalMovieDB.count < 10) {
		console.log('You have not watched too much movies, have you?');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('You are classic movie-watcher, are you not?');
	} else if (personalMovieDB.count >= 30) {
		console.log('You are such a really movie-lover, are you not?');
	} else {
		console.log('Ooops, something went wrong.');
	}
}

countOfMovies();	

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let i = 0; i <= 2; i++) {
		personalMovieDB.genres[i] = prompt(`What is your favourite genre by number ${i + 1}`);
		if (personalMovieDB.genres[i] === '' || personalMovieDB.genres[i] === null) {
			personalMovieDB.genres[i] = prompt(`What is your favourite genre by number ${i + 1}`);
			i--;
		}
	}
}

writeYourGenres();

// let i = 0;
// while (i < 2) {
// 	const lastMovie = prompt('What film you had watched recently?', ''),
//         rate = prompt('How would you rate it?', '');

// 	if (lastMovie != null && rate != null && lastMovie != '' && rate != '' && lastMovie.length < 50) {
// 		personalMovieDB.movies[lastMovie] = rate;
// 		console.log('done');
// 	} else {
// 		console.log('error');
// 		i--;
// 	}	
// 	i++;
// }