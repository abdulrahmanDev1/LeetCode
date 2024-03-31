// Problem link: https://leetcode.com/problems/array-prototype-last/description

/**
 * Returns the last element of the array.
 * @returns {null|boolean|number|string|Array|Object} The last element of the array, or -1 if the array is empty.
 */
Array.prototype.last = function () {
  return this.length === 0 ? -1 : this.pop();
};

const arr = [1, 2, 3];
console.log(arr.last()); // 3
