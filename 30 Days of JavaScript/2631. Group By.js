//Problem link: https://leetcode.com/problems/group-by/description

/**
 * This method groups the elements of the array based on the provided function.
 *
 * @param {Function} fn - The function used to determine the grouping key for each element.
 * @returns {Object} - An object containing the grouped elements.
 */

Array.prototype.groupBy = function (fn) {
  return this.reduce((grouped, item) => {
    const key = fn(item);
    grouped[key] = grouped[key] || [];
    grouped[key].push(item);
    return grouped;
  }, {});
};

[1, 3].groupBy(String); // {"1":[1],"2":[2],"3":[3]}
