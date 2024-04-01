// Problem link: https://leetcode.com/problems/length-of-last-word/description

/**
 * Calculates the length of the last word in a given string.
 *
 * @param {string} s - The input string.
 * @returns {number} The length of the last word. Returns 0 if there are no words in the string.
 */
const lengthOfLastWord = (s) => {
  const words = s.split(' ').filter((w) => w.length > 0);
  return words.length > 0 ? words[words.length - 1].length : 0;
};

console.log(lengthOfLastWord('   fly me   to   the moon  '));
