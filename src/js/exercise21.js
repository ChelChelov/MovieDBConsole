'use strict';

const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
	return data.filter(fund => fund.amount > 0)
	.map(fund => fund.amount)
	.reduce((sum, current) => sum + current);
};

const getTotalIncomeAmount = (data) => {
	if (data.some(fund => fund.amount < 0)) {
		return data.map(fund => fund.amount)
		.reduce((sum, current) => sum + current);
	} else {
		return getPositiveIncomeAmount(data);
	}
};

console.log(getTotalIncomeAmount(funds));