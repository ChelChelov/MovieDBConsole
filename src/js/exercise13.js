'use strict';

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let square = 0;
	let volume = 0;
	let price = 0;

	data.shops.forEach((item) => {
		square += item.width * item.length;
	});

	volume = data.height * square;
	price = volume * data.moneyPer1m3;

	if (price <= data.budget) {
		return 'Бюджета достаточно';
	} else {
		return 'Бюджета недостаточно';
	}
}

console.log(isBudgetEnough(shoppingMallData));