## My sellotions to [Leet Code](https://leetcode.com/) Problems.
My Account : [abdulrahmanDev1](https://leetcode.com/abdulrahmanDev1/)



# Explanations

| Number | Explanation |
| ------ | ----------- |
| 2962   | [Count Subarrays Where Max Element Appears at Least K Times](#count-subarrays-where-max-element-appears-at-least-k-times) |

---

## Count Subarrays Where Max Element Appears at Least K Times

1. **Initialization**: 
   - We initialize `appearances` to track the total number of subarrays where the maximum element appears at least `k` times.
   - `maxCount` is initialized to track the count of the maximum element within the current window.
   - `left` and `right` are pointers representing the left and right boundaries of the sliding window.

2. **Iterating through the array**:
   - We use the `right` pointer to iterate through the array.
   - At each iteration, we check if the current element (`nums[right]`) is equal to the maximum element (`max`). If it is, we increment `maxCount` to track the count of the maximum element within the current window.

3. **Sliding window and counting subarrays**:
   - We enter a `while` loop when `maxCount` becomes greater than or equal to `k`. This indicates that the maximum element appears at least `k` times within the current window.
   - Within the `while` loop, we increment `appearances` by the number of subarrays ending at the `right` pointer. This is calculated as the difference between the total number of elements in the array and the `right` pointer's current position.
   - We then move the `left` pointer to shrink the window. If the element at the `left` pointer is equal to the maximum element (`max`), we decrement `maxCount` to reflect the removal of the element from the window.
   - We continue this process until `maxCount` is less than `k`, indicating that the maximum element no longer appears at least `k` times within the current window.

4. **Returning the result**:
   - Once we've processed all elements in the array, we return the total count of subarrays where the maximum element appears at least `k` times.

[Back to table](#explanations)
