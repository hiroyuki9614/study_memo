const fruits = [
	{name: 'apple', quantity: 2},
	{name: 'banana', quantity: 3},
	{name: 'apple', quantity: 1},
	{name: 'cherry', quantity: 5}
];

const sumReduce = fruits.reduce((acc, val) => {
	return acc + val.quantity
}, 0);
console.log(sumReduce);