// Problem link: https://leetcode.com/problems/word-search/description

/**
 * Determines if a word exists in a given board.
 * @param {character[][]} board - The board represented as a 2D array of characters.
 * @param {string} word - The word to search for.
 * @return {boolean} - Returns true if the word exists in the board, false otherwise.
 */
var exist = function (board, word) {
  const rows = board.length;
  const cols = board[0].length;

  /**
   * Recursive helper function to check if the word can be found starting from a given position.
   * @param {number} row - The current row index.
   * @param {number} col - The current column index.
   * @param {number} index - The current index of the word being checked.
   * @return {boolean} - Returns true if the word can be found starting from the current position, false otherwise.
   */
  const check = (row, col, index) => {
    if (index === word.length) {
      return true;
    }

    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      board[row][col] !== word[index]
    ) {
      return false;
    }

    const temp = board[row][col];
    board[row][col] = '#'; // Marked as visited

    const found =
      check(row + 1, col, index + 1) ||
      check(row - 1, col, index + 1) ||
      check(row, col + 1, index + 1) ||
      check(row, col - 1, index + 1);

    board[row][col] = temp;
    return found;
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (check(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};

// Test case
const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ],
  word = 'ABCCED';

console.log(exist(board, word)); // true
