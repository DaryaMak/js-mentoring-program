const {
	getDogs,
	getCats,
	getBirds,
	firstPromise,
	secondPromise
} = require("./utils/utilPromises");


/**
 * Task-1: Create a promise with the resolve state
 * Implement a promise what will be resolved with "Resolved!" string
 * @returns {Promise<"Resolved!">}
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
 */

function promiseResolve() {
	return new Promise((resolve, reject) =>
	resolve('Resolved!'));
}


/**
 * Task-2: Create a promise with the reject state
 * Implement a promise what will be rejected with "Rejected!" string
 * @returns {Promise<"Rejected!">}
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject
 */

function promiseReject() {
	return new Promise((resolve, reject) => 
	reject('Rejected!'));
}

/**
 * Task-3: Create a promise with both resolve and reject states
 * Should resolve when param === true with "Resolved!" string
 * Should reject when param === false with "Rejected!" string
 */

function fullPromise(param) {
	return new Promise((resolve, reject) => {
		if(param === true) {
		  resolve('Resolved!');
		} else if(param === false) {
		  reject('Rejected!');
		}
	  });
	}

/**
 * Task-4: Chain two promises (firstPromise() and secondPromise()
 * from the './utils/utilPromises' file) 
 * and store the result to the
 * variable 'chainingResult' = 'Promises chained';
 * Please do the chaining inside of the promisesChaining function
 */


async function promisesChaining() {
	const firstWord = secondPromise()
    .then(data => {
        console.log(data);
    });
	const secondWord = firstPromise()
	.then(data => {
        console.log(data);
    });
	return firstWord + secondWord;
}
let chainingResult = '${firstWord} + " " + ${secondWord}';	
console.log(chainingResult);

/**
 * Task-5: Implement a function getAnimals() that will return the result of
 * 3 promises: getDogs(), getCats() and getBirds() from the './utils/utilPromises' file;
 * getAnimals() -> ["dogs", "cats", "birds"]
 * @returns {Promise<"["dogs", "cats", "birds"]">}
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 */

async function getAnimals() {
    const promise1 = getDogs();
	const promise2 = getCats();
	const promise3 = getBirds();
	return Promise.all([promise1, promise2, promise3]).then(function(values) {
		console.log(values)
	   });
}

module.exports = {
	promiseResolve,
	promiseReject,
	fullPromise,
	getAnimals,
	promisesChaining
};