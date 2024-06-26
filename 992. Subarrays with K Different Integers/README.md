``` javascript
var subarraysWithKDistinct = function (nums, k) {

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


  return countSubarrays(nums, k) - countSubarrays(nums, k - 1);
};

// Example usage:
const nums = [1, 2, 1, 2, 3];
const k = 2;
console.log(subarraysWithKDistinct(nums, k));
```
### Explanation and Iterations Table for `subarraysWithKDistinct` Function


| Right Pointer Index | Value | Window | Count Before Update | Count After Update | Explanation                                                                                                                                                                                |
| ------------------- | ----- | ------ | ------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 0                   | 1     | [0, 0] | 0                   | 1                  | At index 0, the right pointer is at 1. The window is [0, 0], indicating that the current subarray contains only the element at index 0. Count before update is 0.                          |
| 1                   | 2     | [0, 1] | 1                   | 3                  | At index 1, the right pointer is at 2. The window expands to [0, 1], including elements at index 0 and 1. Count before update is 1, and after updating, it becomes 3.                      |
| 2                   | 1     | [0, 2] | 3                   | 6                  | At index 2, the right pointer is at 1. The window expands to [0, 2], including elements at index 0, 1, and 2. Count before update is 3, and after updating, it becomes 6.                  |
| 3                   | 2     | [0, 3] | 6                   | 10                 | At index 3, the right pointer is at 2. The window expands to [0, 3], including elements at index 0, 1, 2, and 3. Count before update is 6, and after updating, it becomes 10.              |
| 4                   | 3     | [3, 4] | 10                  | 12                 | At index 4, the right pointer is at 3. The window shifts to [3, 4], including elements at index 3 and 4. Count before update is 10, and after updating, it becomes 12.                     |
| 0                   | 1     | [0, 0] | 0                   | 1                  | At index 0 (second iteration), the right pointer is at 1. The window is [0, 0] again. Count before update is 0.                                                                            |
| 1                   | 2     | [1, 1] | 1                   | 2                  | At index 1 (second iteration), the right pointer is at 2. The window shifts to [1, 1], containing only the element at index 1. Count before update is 1, and after updating, it becomes 2. |
| 2                   | 1     | [2, 2] | 2                   | 3                  | At index 2 (second iteration), the right pointer is at 1. The window expands to [2, 2], including only the element at index 2. Count before update is 2, and after updating, it becomes 3. |
| 3                   | 2     | [3, 3] | 3                   | 4                  | At index 3 (second iteration), the right pointer is at 2. The window shifts to [3, 3], containing only the element at index 3. Count before update is 3, and after updating, it becomes 4. |
| 4                   | 3     | [4, 4] | 4                   | 5                  | At index 4 (second iteration), the right pointer is at 3. The window shifts to [4, 4], containing only the element at index 4. Count before update is 4, and after updating, it becomes 5. |

`countSubarrays(nums, k)`: This function calculates the count of subarrays with at most k distinct elements. For example, if k is 2, it will count subarrays with 1 distinct element, subarrays with 2 distinct elements, and so on.

`countSubarrays(nums, k - 1)`: This function calculates the count of subarrays with at most k - 1 distinct elements. For example, if k is 2, it will count subarrays with 1 distinct element only.

**Subtraction**: By subtracting the count of subarrays with at most k - 1 distinct elements from the count of subarrays with at most k distinct elements, we effectively remove the subarrays with fewer than k distinct elements. This leaves us with only the subarrays that have exactly k distinct elements.

So, the expression `countSubarrays(nums, k) - countSubarrays(nums, k - 1)` gives us the count of subarrays with exactly k distinct elements, which is what we want.

[Back to table](../README.md/#explanations)
