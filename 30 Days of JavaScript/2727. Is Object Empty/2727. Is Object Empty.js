/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  const type = Array.isArray(obj) ? 'array' : typeof obj;

  if (type === 'array') {
    return obj.length === 0 ? true : false;
  }
  return Object.keys(obj).length === 0 ? true : false;
};
