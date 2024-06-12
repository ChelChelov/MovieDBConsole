/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/


// const personalMovieDB = {
// 	count: 0,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false,
// 	start: function () {
// 		personalMovieDB.count = prompt('How many films you have already watched?', '');
	
// 		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
// 			personalMovieDB.count = prompt('How many films you have already watched?', '');
// 		}
// 	},
// 	rememberMyMovies: function () {
// 		for (let i = 0; i < 2; i++) {
// 			const lastMovie = prompt('What film you had watched recently?', '').trim(),
// 				rate = prompt('How would you rate it?', '').trim();
		
// 			if (lastMovie != null && rate != null && lastMovie != '' && rate != '' && lastMovie.length < 50) {
// 				personalMovieDB.movies[lastMovie] = rate;
// 				console.log('done');
// 			} else {
// 				console.log('error');
// 				i--;
// 			}	
// 		}
// 	},
// 	countOfMovies: function () {
// 		if (personalMovieDB.count < 10) {
// 			console.log('You have not watched too much movies, have you?');
// 		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
// 			console.log('You are classic movie-watcher, are you not?');
// 		} else if (personalMovieDB.count >= 30) {
// 			console.log('You are such a really movie-lover, are you not?');
// 		} else {
// 			console.log('Ooops, something went wrong.');
// 		}
// 	},
// 	writeYourGenres: function () {
// 		for (let i = 1; i <= 3; i++) {
// 			let genre = prompt(`What is your favourite genre by number ${i}`).toLowerCase();
// 			if (genre === '' || genre === null) {
// 				console.log('Your input is incorrect');
// 				i--;
// 			} else {
// 				personalMovieDB.genres[i - 1] = genre;
// 			}
// 		}
// 		personalMovieDB.genres.forEach ((item, i) => {
// 			console.log(`Favourite genre #${i + 1} is ${item}`);
// 		});
// 	},
// 	toggleVisibleMyDB: function () {
// 		if (personalMovieDB.privat) {
// 			personalMovieDB.privat = false;
// 		} else {
// 			personalMovieDB.privat = true;
// 		}
// 	},
// 	showMyDB: function (hidden) {
// 		if (!hidden) {
// 			console.log(personalMovieDB);
// 		}
// 	}
// };

// personalMovieDB.start();
// personalMovieDB.rememberMyMovies();
// personalMovieDB.countOfMovies();	
// // personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.writeYourGenres();



const myModule = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module './js/testWebpack.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
/******/ })()
;
//# sourceMappingURL=bundle.js.map