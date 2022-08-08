const {
  promiseResolve,
  promiseReject
} = require('./promises');
const {
  getDogs,
  getCats,
  getBirds
} = require("./utils/utilPromises");
/**
 * Materials: 
 * - https://javascript.info/async-await
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 * 
 */

/**
 * TASK-1: Resolve the created earlier promiseResolve() promise
 * using async/await syntax inside the asyncPromiseResolve function 
 * and modify the message to -> Resolved! with async await
 * @returns {Promise<"Resolved! with async await">}
 * 
 */

const newResolvedFunction = new Promise(resolve => resolve("Resolved! with async await"));
async function asyncPromiseResolve() {
  const result = await newResolvedFunction;
  return result; 
}

/**
 * TASK-2: Reject the created earlier promiseReject() promise
 * using async/await syntax inside the asyncPromiseReject function
 * and modify the message to -> Rejected! with async await
 * @returns {Promise<"Rejected! with async await">}
 */

const newRejectedFunction = new Promise(reject => reject("Rejected! with async await"));
async function asyncPromiseReject() {
  const result = await newRejectedFunction;
  return result; 
}

/**
 * TASK-3: Return the result of 3 promises: 
 * getDogs(), getCats() and getBirds() from the './utils/utilPromises' file
 * using async/await syntax
 * @returns 
 */
 
async function asyncPromiseAll() {
    let promise1 = getDogs();
    let promise2 = getCats();
    let promise3 = getBirds();
    let values = await Promise.all([promise1, promise2, promise3]);
    return values; 
   }

module.exports = {
  asyncPromiseResolve,
  asyncPromiseReject,
  asyncPromiseAll
};