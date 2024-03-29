/**
 * Constructs a memoized version of a function.
 *
 * @param {Function} fn - The original function to be memoized.
 * @returns {Function} - A memoized version of the original function.
 */
function memoize(fn) {
  const memoizationCache = new Map();

  return function (...args) {
    const cacheKey = JSON.stringify(args);

    if (memoizationCache.has(cacheKey)) {
      return memoizationCache.get(cacheKey);
    }

    const result = fn(...args);

    memoizationCache.set(cacheKey, result);

    return result;
  };
}

// Example usage:
let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});

memoizedFn(2, 3); // Output: 5
memoizedFn(2, 3); // Output: 5
console.log(callCount); // Output: 1
