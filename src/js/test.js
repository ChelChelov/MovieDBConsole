'use strict';

console.log('Request data...');

const req = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('Prepearing data...');

		const product = {
			name: 'TV',
			price: 300
		};

		if (typeof product == 'object') {
			resolve(product);
		} else {
			reject();
		}
		
	}, 2000);
});

req.then(product => { 
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			product.ordered = true;
			if (product.ordered) {
				console.log('Modifying product...');
				resolve(product);
			} else {
				reject();
			}
		}, 2000);
	});
}).then(data => {
	setTimeout(() => console.log(data), 2000);
}).catch(() => {
	setTimeout(() => console.log('Product was not been modified or does not exist'), 2000);
}).finally(() => console.log('Final message')
);