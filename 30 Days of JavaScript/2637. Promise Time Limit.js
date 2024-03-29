/**
 * Constructs a time-limited version of an asynchronous function.
 *
 * @param {Function} fn - The asynchronous function to be time-limited.
 * @param {number} t - The time limit in milliseconds.
 * @returns {Function} - A time-limited version of the original asynchronous function.
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    return Promise.race([
      fn(...args),
      new Promise((resolve, reject) => {
        setTimeout(() => reject('Time Limit Exceeded'), t);
      }),
    ]);
  };
};

// Example usage:
// Create a time-limited version of an asynchronous function
const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);

// Call the time-limited function with an argument exceeding the time limit
limited(150).catch(console.log); // Output: "Time Limit Exceeded" at t=100ms
