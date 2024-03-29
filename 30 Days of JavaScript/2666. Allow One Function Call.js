//Problem link: https://leetcode.com/problems/allow-one-function-call/description

/**
 * Creates a new function that can only be called once.
 * @param {Function} fn - The function to be called once.
 * @return {Function} - A new function that can only be called once.
 */
var once = function (fn) {
  let fnCalled = false;
  return function (...args) {
    if (fnCalled) {
      return undefined;
    }
    fnCalled = true;
    return fn(...args);
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);

onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // returns undefined without calling fn
