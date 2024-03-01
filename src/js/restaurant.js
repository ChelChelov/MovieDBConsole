'use strict';

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (parseFloat(fDish.price) + parseFloat(sDish.price) < parseFloat(average)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[1], restorantData.menu[3], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data, {
		waitors: Object.assign({}, data.waitors)
	});

    copy.waitors[0] = {name: 'Mike', age: 32};
    return copy;
}

transferWaitors(restorantData);

// function transferWaitors(data) {
//     const copy = {
// 		...data,
// 		waitors: [
// 			...data.waitors
// 		]
// 	};

//     copy.waitors[0] = {name: 'Mike', age: 32};
//     return copy;
// }