//Problem link: https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/description

/**
 * Returns the number of sub-arrays where the maximum element of numbers appears at least k times in that sub-array.
 *
 * @param {number[]} numbers - The integer array.
 * @return {number} - The number of sub-arrays.
 */
var countSubarrays = (nums, k) => {
  let appearances = 0;
  let maxCount = 0;
  let left = 0;
  const max = Math.max(...nums);

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === max) {
      maxCount++;
    }

    while (maxCount >= k) {
      appearances += nums.length - right;
      if (nums[left] === max) {
        maxCount--;
      }
      left++;
    }
  }

  return appearances;
};

console.log(countSubarrays([1, 3, 2, 3, 3], 2)); //6
