//Problem link :https://leetcode.com/problems/debounce/description/

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
/**
 * Creates a debounced version of a function.
 *
 * @param {Function} fn - The function to be debounced.
 * @param {number} t - The time in milliseconds to delay the execution of the function.
 * @returns {Function} - The debounced version of the function.
 *
 * @example
 * const debouncedFn = debounce(myFunction, 500);
 * debouncedFn(); // Executes myFunction after 500 milliseconds
 * debouncedFn(); // Cancels the previous execution and schedules a new one after 500 milliseconds
 */
const debounce = (fn, t) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

const log = debounce(console.log, 300);
log('Hello1'); // cancelled
log('Hello2'); // cancelled
log('Hello3'); // Logged at t=100ms
