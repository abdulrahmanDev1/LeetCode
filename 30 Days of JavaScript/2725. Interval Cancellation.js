//Problem link: https://leetcode.com/problems/interval-cancellation/description

/**
 * Creates a cancellable interval that repeatedly calls the given function with the specified arguments.
 *
 * @param {Function} fn - The function to be called.
 * @param {Array} args - The arguments to be passed to the function.
 * @param {number} t - The interval time in milliseconds.
 * @returns {Function} - The cancel function that stops the interval.
 */
var cancellable = function (fn, args, t) {
  fn(...args);
  const intervalID = setInterval(fn, t, ...args);

  const cancelFn = () => clearInterval(intervalID);

  return cancelFn;
};

const result = [];

const fn = (x) => x * 2;

const args = [4];
const t = 35;
const cancelTimeMs = 190;

const start = performance.now();

const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  result.push({ time: diff, returned: fn(...argsArr) });
};

// Create a cancellable interval using the log function, arguments, and interval time
const cancel = cancellable(log, args, t);

// Set a timeout to cancel the interval after a specified time
setTimeout(cancel, cancelTimeMs);

// Set a timeout to log the result after the cancel time and interval time have passed
setTimeout(() => {
  console.log(result);
}, cancelTimeMs + t + 15);
