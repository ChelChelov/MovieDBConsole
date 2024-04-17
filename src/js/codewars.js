'use strict';

// const { get } = require("browser-sync");

function toCamelCase(str){
	str = str[0].toUpperCase();
}

console.log(toCamelCase('warrior'));

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    for (let i = 5; i <= 10; i++) {
        arrayOfNumbers.push(i);
    }
    
    // Не трогаем
    return arrayOfNumbers;
}
console.log(fifthTask());

function fourthTask() {
    for (let i = 20; i >= 10; i--) {
        if (i === 13) {
            break;
        }
        console.log(i);
    }
}
fourthTask();

function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    // Пишем решение вот тут
    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === 'string') {
            data[i] += ' - done';
        } else {
                data[i] *= 2;
        }
    }
    // Не трогаем
    return data;
}

function getMathResult(a, b) {
    if (typeof b !== 'number' || b <= 1) {
        return a;
    }
    let str = `${a}`;
    for (let i = 2; i <= b; i++) {
        str += '---';
        str += a * i;
    }
    return str;
}

console.log(getMathResult(3, 10));