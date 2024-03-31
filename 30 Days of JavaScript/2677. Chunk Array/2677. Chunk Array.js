// Problem link: https://leetcode.com/problems/chunk-array/description/

/**
 * Splits an array into smaller arrays of a specified size.
 *
 * @param {Array} arr - The array to be split.
 * @param {number} size - The size of each sub-array.
 * @returns {Array} - An array of sub-arrays.
 */
var chunk = function (arr, size) {
  let subArr = [];
  let arrays = [];

  for (let i = 0; i < arr.length; i += size) {
    subArr = arr.slice(i, i + size);
    arrays.push(subArr);
  }

  return arrays;
};

console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
