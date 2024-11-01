/**
 * Creates a promise that resolves after a specified delay.
 * @function
 * @param {number} ms - The number of milliseconds to wait.
 * @returns {Promise<void>} A promise that resolves after the given delay.
 */
const wait = (ms) => {};

/**
 * Executes multiple promises concurrently and resolves when all promises complete. Rejects if any promise fails.
 * @function
 * @param {Promise[]} promises - An array of promises to be resolved.
 * @returns {Promise<Array>} A promise that resolves to an array of results from the input promises, or rejects if any promise fails.
 */
const promiseAll = (promises) => {};

/**
 * Resolves or rejects as soon as any promise in the array settles.
 * @function
 * @param {Promise[]} promises - An array of promises to race.
 * @returns {Promise} A promise that settles with the same outcome as the first settled promise in the array.
 */
const promiseRace = (promises) => {};

/**
 * Executes sequentially promises from an array of promise factory functions.
 * @function
 * @param {Array<() => Promise>} fns - An array of functions, each returning a promise.
 * @returns {Promise} A promise that resolves when all functions complete in sequence, or rejects if any function's promise rejects.
 */
const promiseChain = (fns) => {};
