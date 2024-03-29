//Problem link: https://leetcode.com/problems/cache-with-time-limit/description/

/**
 * Constructs a new TimeLimitedCache object.
 *
 * The TimeLimitedCache object allows you to store key-value pairs with an associated expiration time.
 * Once the expiration duration has elapsed, the key becomes inaccessible.
 *
 * @constructor
 */
var TimeLimitedCache = function () {
  this.keysStartTimes = {};
  this.keysDurations = {};
  this.values = {};
};

/**
 * Sets a key-value pair with an associated expiration time.
 *
 * @param {number} key - The integer key to be set.
 * @param {number} value - The integer value to be associated with the key.
 * @param {number} duration - The duration in milliseconds until the key becomes inaccessible.
 * @returns {boolean} - Returns true if the same un-expired key already exists, false otherwise.
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const currentTime = Date.now();

  if (
    !this.keysStartTimes.hasOwnProperty(key) ||
    currentTime - this.keysStartTimes[key] > this.keysDurations[key]
  ) {
    this.keysStartTimes[key] = currentTime;
    this.keysDurations[key] = duration;
    this.values[key] = value;
    return false; // New key is set or expired key is overwritten
  }

  // Unexpired key already exists, update value and duration
  this.values[key] = value;
  this.keysDurations[key] = duration;
  return true;
};

/**
 * Retrieves the value associated with the specified key.
 *
 * @param {number} key - The integer key whose associated value is to be retrieved.
 * @returns {number} - Returns the value associated with the key if it is unexpired, otherwise returns -1.
 */
TimeLimitedCache.prototype.get = function (key) {
  const currentTime = Date.now();

  if (
    !this.keysStartTimes.hasOwnProperty(key) ||
    currentTime - this.keysStartTimes[key] > this.keysDurations[key]
  ) {
    return -1;
  }

  return this.values[key];
};

/**
 * Returns the count of unexpired keys in the cache.
 *
 * @returns {number} - Returns the count of unexpired keys.
 */
TimeLimitedCache.prototype.count = function () {
  const currentTime = Date.now();
  let count = 0;

  for (const key in this.keysStartTimes) {
    if (currentTime - this.keysStartTimes[key] <= this.keysDurations[key]) {
      count++;
    }
  }

  return count;
};

// Example usage:
const timeLimitedCache = new TimeLimitedCache();
timeLimitedCache.set(1, 42, 1000); // false
timeLimitedCache.get(1); // 42
timeLimitedCache.count(); // 1
