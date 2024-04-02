// Problem link: https://leetcode.com/problems/isomorphic-strings/description/

/**
 * Determines if two strings are isomorphic.
 *
 * @param {string} s - The first string.
 * @param {string} t - The second string.
 * @returns {boolean} - True if the strings are isomorphic, false otherwise.
 */
var isIsomorphic = function (s, t) {
  const mapS = {};
  const mapT = {};
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    if (mapS[s[i]] !== mapT[t[i]]) {
      return false;
    }
    mapS[s[i]] = i + 1;
    mapT[t[i]] = i + 1;
  }

  return true;
};

let s = 'egg';
let t = 'add';

console.log(isIsomorphic(s, t)); // true
