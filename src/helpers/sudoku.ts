export type Grid = number[][];
type Cell = {
  rowIndex: number;
  colIndex: number;
};

const GRID_SIZE = 9;
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const shuffle = (array: number[]) => {
  let newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
};

const newGrid = (): Grid => {
  const grid = [];
  for (let i = 0; i < GRID_SIZE; i++) {
    const row = [];
    for (let j = 0; j < GRID_SIZE; j++) {
      row.push(0);
    }
    grid.push(row);
  }

  return grid;
};

// puzzleArray is the game board being solved. A 9x9 matrix
// emptyCell = {rowIndex: INT , colIndex: INT } INT = coordinates of currently empty cell
// num = integer value 1-9 being tested
const rowSafe = (grid: Grid, targetCell: Cell, number: number) => {
  const { colIndex, rowIndex } = targetCell;

  if (number === 0) {
    return true;
  }

  for (let currCol = 0; currCol < grid[rowIndex].length; currCol++) {
    if (currCol === colIndex) {
      continue;
    }
    if (currCol !== colIndex && grid[rowIndex][currCol] === number) {
      return false;
    }
  }

  return true;
};

// puzzleArray is the game board being solved. A 9x9 matrix
// emptyCell = {rowIndex: INT , colIndex: INT } INT = coordinates of currently empty cell
// num = integer value 1-9 being tested
const colSafe = (grid: Grid, targetCell: Cell, number: number) => {
  const { rowIndex, colIndex } = targetCell;

  if (number === 0) {
    return true;
  }

  for (let currRow = 0; currRow < grid.length; currRow++) {
    if (currRow === rowIndex) {
      continue;
    }
    if (grid[currRow][colIndex] === number) {
      return false;
    }
  }

  return true;
};

// puzzleArray is the game board being solved. A 9x9 matrix
// emptyCell = {rowIndex: INT , colIndex: INT } INT = coordinates of currently empty cell
// num = integer value 1-9 being tested
const boxSafe = (grid: Grid, targetCell: Cell, number: number) => {
  const { rowIndex, colIndex } = targetCell;
  // Define top left corner of box region for empty cell
  const boxStartRow = rowIndex - (rowIndex % 3);
  const boxStartCol = colIndex - (colIndex % 3);

  if (number === 0) {
    return true;
  }

  for (const boxRow of [0, 1, 2]) {
    // Each box region has 3 rows
    for (const boxCol of [0, 1, 2]) {
      const currRowIndex = boxStartRow + boxRow;
      const currColIndex = boxStartCol + boxCol;
      if (currRowIndex === rowIndex && currColIndex === colIndex) {
        continue;
      }
      // Each box region has 3 columns
      // Is num is present in box region?
      if (grid[boxStartRow + boxRow][boxStartCol + boxCol] === number) {
        return false; // If number is found, it is not safe to place
      }
    }
  }

  return true;
};

export const safeToPlace = (grid: Grid, targetCell: Cell, number: number) => {
  return (
    rowSafe(grid, targetCell, number) &&
    colSafe(grid, targetCell, number) &&
    boxSafe(grid, targetCell, number)
  );
};

const nextEmptyCell = (grid: Grid): false | Cell => {
  let emptyCell: Cell | null = null;

  grid.forEach((row, rowIndex) => {
    // If this key has already been assigned, skip iteration
    if (emptyCell) {
      return;
    }

    // find first null-element
    let firstZero = row.find((col) => col === 0);

    // if no null-element present, skip to next row
    if (firstZero === undefined) {
      return;
    }
    emptyCell = {
      rowIndex,
      colIndex: row.indexOf(firstZero),
    };
  });

  if (emptyCell) {
    return emptyCell;
  }

  // If emptyCell was never assigned, there are no more zeros
  return false;
};

let counter = 0;

const fillPuzzle = (grid: Grid) => {
  const emptyCell = nextEmptyCell(grid);

  // If there are no more zeros, the board is finished, return it
  if (!emptyCell) {
    return grid;
  }

  for (let num of shuffle(numArray)) {
    // counter is a global variable tracking the number of iterations performed in generating a puzzle
    // Most puzzles generate in < 500ms, but occassionally random generation could run in to
    // heavy backtracking and result in a long wait. Best to abort this attempt and restart.
    // See initializer function for more
    counter++;
    if (counter > 20_000_000) {
      throw new Error("Recursion Timeout");
    }

    if (safeToPlace(grid, emptyCell, num)) {
      // If safe to place number, place it
      grid[emptyCell.rowIndex][emptyCell.colIndex] = num;

      // Recursively call the fill function to place num in next empty cell
      if (fillPuzzle(grid)) {
        return grid;
      }

      // If we were unable to place the future num, that num was wrong.
      // Reset it and try next
      grid[emptyCell.rowIndex][emptyCell.colIndex] = 0;
    }
  }

  // If unable to place any number, return false,
  // causing previous round to go to next num
  return false;
};

// Generate array from range, inclusive of start & endbounds.
const range = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => start + i);
};

const pokeHoles = (grid: Grid, holes: number): Grid => {
  const removedVals = [];
  const startingBoard = [...grid];

  while (removedVals.length < holes) {
    const val = Math.floor(Math.random() * 81); // Value between 0-81
    const randomRowIndex = Math.floor(val / 9); // Integer 0-8 for row index
    const randomColIndex = val % 9;

    if (!startingBoard[randomRowIndex]) {
      continue; // guard against cloning error
    }
    if (startingBoard[randomRowIndex][randomColIndex] == 0) {
      continue; // If cell already empty, restart loop
    }

    removedVals.push({
      // Store the current value at the coordinates
      rowIndex: randomRowIndex,
      colIndex: randomColIndex,
      val: startingBoard[randomRowIndex][randomColIndex],
    });
    startingBoard[randomRowIndex][randomColIndex] = 0; // "poke a hole" in the board at the coords
    const proposedBoard = startingBoard.map((row) => row.slice()); // Clone this changed board

    // Attempt to solve the board after removing value. If it cannot be solved, restore the old value.
    // and remove that option from the list
    if (!fillPuzzle(proposedBoard)) {
      const value = removedVals.pop();
      if (value) {
        startingBoard[randomRowIndex][randomColIndex] = value.val;
      }
    }
  }
  return startingBoard;
};

export const newSolvedBoard = (): Grid => {
  // Create an unaffiliated clone of a fresh board
  const grid = newGrid();

  // Populate the board using backtracking algorithm
  const solvedBoard = fillPuzzle(grid);

  if (!solvedBoard) {
    throw new Error("No solved board");
  }

  return solvedBoard;
};

export const newStartingBoard = (holes: number): Grid => {
  // Reset global iteration counter to 0 and Try to generate a new game.
  // If counter reaches its maximum limit in the fillPuzzle function, current attemp will abort
  // To prevent the abort from crashing the script, the error is caught and used to re-run
  // this function
  try {
    counter = 0;
    let solvedBoard = newSolvedBoard();

    // Clone the populated board and poke holes in it.
    // Stored the removed values for clues
    return pokeHoles(
      solvedBoard.map((row) => row.slice()),
      holes
    );
  } catch (error) {
    return newStartingBoard(holes);
  }
};
