## `exist` Function Explanation

The `exist` function checks if a given word exists in a 2D grid.

### Input Parameters

- `board`: A 2D array representing the grid of characters.
- `word`: The word to search for in the grid.

### Function Structure

1. **Initialization**:

   - Initialize variables `rows` and `cols` to store the number of rows and columns in the grid, respectively.

2. **Recursive Function `check`**:

   - The `check` function recursively explores adjacent cells to check if the word can be formed starting from a particular position `(row, col)` in the grid.
   - **Parameters**:
     - `row`: The current row in the grid.
     - `col`: The current column in the grid.
     - `index`: The index of the character being checked in the word.
   - **Base Case**:
     - If `index` equals the length of the word, return `true`, indicating the entire word has been found.
   - **Boundary Checks**:
     - Check if the current position `(row, col)` is out of bounds or if the character in the grid at `(row, col)` does not match the corresponding letter in the word.
     - If any of these conditions are met, return `false`, indicating the current position cannot be part of the word.
   - **Exploration**:
     - Temporarily mark the current cell as visited to avoid reusing the same letter.
     - Recursively explore adjacent cells in all four directions (up, down, left, right) by calling the `check` function with updated row and column indices and incremented index.
     - If any of the recursive calls return `true`, return `true`, indicating the word is found.
     - If none of the recursive calls return `true`, restore the original value of the current cell.
   - **Example**:
     - Suppose we're searching for the word "ABCD" in the grid, and the current position is `(row, col)` with index `index` pointing to "A".
     - The function will explore adjacent cells recursively, moving to "B", then "C", and finally "D".
     - If all adjacent cells lead to valid paths forming the word "ABCD", the function returns `true`.

3. **Grid Traversal**:

   - Iterate through each cell in the grid using nested loops.
   - For each cell `(i, j)`, call the `check` function to start searching for the word.
   - If the `check` function returns `true` for any cell, immediately return `true`.
   - If no match is found after traversing the entire grid, return `false`.

4. **Return Value**:
   - Return `true` if the word is found in the grid, otherwise `false`.

#### Code

```javascript
var exist = function (board, word) {
  const rows = board.length;
  const cols = board[0].length;

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
```

[Back to table](../README.md/#explanations)
