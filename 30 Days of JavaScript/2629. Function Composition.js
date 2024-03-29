//Problem link: https://leetcode.com/problems/function-composition/description

/**
 * Composes an array of functions into a single function.
 * @param {Function[]} functions - An array of functions to be composed.
 * @return {Function} - A composed function that applies each function in reverse order.
 */
var compose = function (functions) {
  return function (x) {
    for (let i = functions.length - 1; i >= 0; i--) {
      x = functions[i](x);
    }
    return x;
  };
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);
fn(4); // 9
