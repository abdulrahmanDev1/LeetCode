/**
 * Checks whether an object or array is empty.
 * @param {Object|Array} obj - The object or array to check for emptiness.
 * @return {boolean} - Returns true if the object or array is empty, otherwise false.
 */
var isEmpty = function (obj) {
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }
  return Object.keys(obj).length === 0;
};
