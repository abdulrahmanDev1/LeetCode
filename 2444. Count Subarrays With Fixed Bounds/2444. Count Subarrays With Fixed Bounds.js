// Problem link: https://leetcode.com/problems/count-subarrays-with-fixed-bounds/description
/**
 * Counts the number of subarrays within the given array that have elements within the specified range.
 *
 * @param {number[]} nums - The array of numbers.
 * @param {number} minK - The minimum value of the range.
 * @param {number} maxK - The maximum value of the range.
 * @returns {number} The count of subarrays with elements within the specified range.
 */
const countSubarrays = function (nums, minK, maxK) {
  let minPos = -1;
  let maxPos = -1;
  let left = -1;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    nums[i] < minK || nums[i] > maxK ? (left = i) : null;

    nums[i] == minK ? (minPos = i) : null;

    nums[i] == maxK ? (maxPos = i) : null;

    let len = (maxPos < minPos ? maxPos : minPos) - left;

    len > 0 ? (count += len) : null;
  }
  return count;
};

console.log(countSubarrays([1, 3, 5, 2, 7, 5], 1, 5)); // Output: 2
console.log(countSubarrays([1, 1, 1, 1], 1, 1)); // Output: 10
