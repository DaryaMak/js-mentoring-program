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

async function asyncPromiseResolve() {
  const resolved = await promiseResolve();
  return `${resolved} with async await`;
}

asyncPromiseResolve()

/**
 * TASK-2: Reject the created earlier promiseReject() promise
 * using async/await syntax inside the asyncPromiseReject function
 * and modify the message to -> Rejected! with async await
 * @returns {Promise<"Rejected! with async await">}
 */

async function asyncPromiseReject() {
  try {
    const error = await promiseReject();
  } catch (err) {
    return `${err} with async await`;
   }
}

asyncPromiseReject()

/**
 * TASK-3: Return the result of 3 promises: 
 * getDogs(), getCats() and getBirds() from the './utils/utilPromises' file
 * using async/await syntax
 * @returns 
 */
 
 async function asyncPromiseAll() {
  const result = await Promise.all([getDogs(), getCats(), getBirds()]);
  return result;
}

module.exports = {
  asyncPromiseResolve,
  asyncPromiseReject,
  asyncPromiseAll
};