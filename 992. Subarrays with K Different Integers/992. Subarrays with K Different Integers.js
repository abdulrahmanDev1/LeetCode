// Problem link: https://leetcode.com/problems/subarrays-with-k-different-integers/description/
/**
 * Counts the number of subarrays with exactly k distinct elements.
 * @param {number[]} nums - The array of integers.
 * @param {number} k - The number of distinct elements.
 * @returns {number} - The count of subarrays with exactly k distinct elements.
 */
var subarraysWithKDistinct = function (nums, k) {
  /**
   * Counts the number of subarrays with at most k distinct elements.
   * @param {number[]} nums - The array of integers.
   * @param {number} k - The maximum number of distinct elements.
   * @returns {number} - The count of subarrays with at most k distinct elements.
   */
  const countSubarrays = (nums, k) => {
    let count = 0;
    let left = 0;
    let distinctCount = 0;
    const frequency = new Map();

    for (let right = 0; right < nums.length; right++) {
      const num = nums[right];
      if (!frequency.has(num) || frequency.get(num) === 0) {
        distinctCount++;
      }
      frequency.set(num, (frequency.get(num) || 0) + 1);

      while (distinctCount > k) {
        const leftNum = nums[left];
        frequency.set(leftNum, frequency.get(leftNum) - 1);
        if (frequency.get(leftNum) === 0) {
          distinctCount--;
        }
        left++;
      }
      count += right - left + 1;
    }
    return count;
  };

  // Subtract the count of subarrays with at most k-1 distinct elements
  // from the count of subarrays with at most k distinct elements
  return countSubarrays(nums, k) - countSubarrays(nums, k - 1);
};

// Example usage:
const nums = [1, 2, 1, 2, 3];
const k = 2;
console.log(subarraysWithKDistinct(nums, k));
