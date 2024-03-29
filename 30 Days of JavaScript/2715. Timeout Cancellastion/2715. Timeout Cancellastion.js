//Problem link: https://leetcode.com/problems/timeout-cancellation/description

/**
 * Executes a function after a specified timeout and returns a cancel function to cancel the timeout.
 *
 * @param {Function} fn - The function to be executed after the timeout.
 * @param {Array} args - The arguments to be passed to the function.
 * @param {number} t - The timeout in milliseconds.
 * @returns {Function} - The cancel function that can be used to cancel the timeout.
 */
function cancellable(fn, args, t) {
  const timeout = setTimeout(fn, t, ...args);
  const cancelFn = () => clearTimeout(timeout);
  return cancelFn;
}

const result = [];

const fn = (x) => x * 5;
const args = [2],
  t = 20,
  cancelTimeMs = 50;

const start = performance.now();

const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  result.push({ time: diff, returned: fn(...argsArr) });
};

// Create a cancellable function that executes the "log" function after a specified timeout
const cancel = cancellable(log, args, t);

// Determine the maximum timeout value
const maxT = Math.max(t, cancelTimeMs);

// Set a timeout to cancel the execution of the "log" function
setTimeout(cancel, cancelTimeMs);

// Set a timeout to log the result after the maximum timeout value has passed
setTimeout(() => {
  console.log(result); // [{"time":20,"returned":10}]
}, maxT + 15);
