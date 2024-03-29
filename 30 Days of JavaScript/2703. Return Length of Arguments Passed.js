//Problem link: https://leetcode.com/problems/return-length-of-arguments-passed/description

/**
 * Calculates the length of the arguments passed to the function.
 *
 * @param {...(null|boolean|number|string|Array|Object)} args - The arguments to calculate the length of.
 * @return {number} - The length of the arguments.
 */
var argumentsLength = function (...args) {
  let argsCount = 0;
  for (arg in args) {
    argsCount += 1;
  }
  return argsCount;
};

argumentsLength(1, 2, 3); // 3
