//Problem link: https://leetcode.com/problems/add-two-promises/description

/**
 * Adds the resolved values of two promises and returns a new promise.
 *
 * @param {Promise} promise1 - The first promise.
 * @param {Promise} promise2 - The second promise.
 * @return {Promise} - A promise that resolves to the sum of the resolved values of the input promises.
 */
var addTwoPromises = async function (promise1, promise2) {
  let value = 0;
  return Promise.all([promise1, promise2]).then((values) => {
    for (let i in values) {
      value += values[i];
    }
    return value;
  });
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4
