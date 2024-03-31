``` javascript

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
```

# Explanation
- We start by initializing variables `minPos`, `maxPos`, `left`, and `count` to -1, which will store the indices of the most recent occurrences of `minK`, `maxK`, the left boundary of the current subarray, and the overall count of valid subarrays, respectively.
- Then, we iterate through the `nums` array using a `for` loop.
- Within the loop:
  - If the current element `nums[i]` is less than `minK` or greater than `maxK`, we update `left` to `i` to mark the start of a new potential subarray.
  - If `nums[i]` is equal to `minK`, we update `minPos` to `i` to store the position of the most recent occurrence of `minK`.
  - If `nums[i]` is equal to `maxK`, we update `maxPos` to `i` to store the position of the most recent occurrence of `maxK`.
  - We then calculate the length of the current subarray using the expression `(maxPos < minPos ? maxPos : minPos) - left`. This ensures that we count only subarrays with elements within the specified range.
  - If the length of the subarray is greater than 0, we increment the `count` variable by the length of the subarray.
- Finally, we return the total count of valid subarrays.

[Back to table](../README.md/#explanations)