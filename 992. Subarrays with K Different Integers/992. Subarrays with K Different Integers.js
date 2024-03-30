/**
 * Returns the number of good subarrays of nums where the number of different integers is exactly k.
 *
 * @param {number[]} nums - The integer array.
 * @param {number} k - The target number of different integers.
 * @returns {number} - The number of good subarrays.
 */
var subarraysWithKDistinct = function (nums, k) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const set = new Set();
    for (let j = i; j < nums.length; j++) {
      set.add(nums[j]);
      if (set.size === k) {
        result.push(nums.slice(i, j + 1));
      } else if (set.size > k) {
        break;
      }
    }
  }

  return result.length;
};

// Example usage:
const nums = [1, 2, 1, 2, 3];
const k = 2;
console.log(subarraysWithKDistinct(nums, k)); // 7
