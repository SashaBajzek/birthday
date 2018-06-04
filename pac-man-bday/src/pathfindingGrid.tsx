import gameboardCells from './gameboardCells';

import * as PF from 'pathfinding';

// Find the total number of rows
let gameRows = 0;
gameboardCells.forEach((cell) => gameRows = Math.max(gameRows, cell.y));
gameRows++;
export {gameRows};

// Find the total number of columns
let gameColumns = 0;
gameboardCells.forEach((cell) => gameColumns = Math.max(gameColumns, cell.x));
gameColumns++;
export {gameColumns};

// Find the y coordinate of the door
const leftColumn = gameboardCells.filter((cell:any) => cell.x === 0);
let door: number;
leftColumn.forEach((cell:any) => {
  if(cell.borders[3] === 0) {
    door = cell.y;
  }
});

// Build a matrix of 0 and 1 to pass into the pathfinding grid
function buildMatrixOriginal(gameCells:any, rows:number, columns:number) {
  const matrix:any = [];
  let counter:number = 0;
  for(let j = 0; j < rows; j++) {
    matrix[j] = [];
    for(let i = 0; i < columns; i++) {
      matrix[j].push(gameCells[counter].traversable ? 0 : 1);
      counter++;
    }
  }
  return matrix;
}

// Build a second matrix that takes the second half of the grid and moves it to the beginning
// With a wall in the middle with the door
// The two matrices will be used to see if it's more efficient to go through the door
function buildMatrixInsideOut(origMatrix:any, gameCells:any, rows:number, columns:number) {
  const matrix:any = [];
  origMatrix.forEach((row: any, index: any) => {
    matrix[index] = [];
    // Move the second half of the matrix to the beginning
    for(let i = Math.ceil(columns / 2); i < columns; i++) {
      matrix[index].push(row[i]);
    }
    // Create the wall with door opening
    if(index === door) {
      matrix[index].push(0);
    } else {
      matrix[index].push(1);
    }
    // Add the first half of the matrix to the end
    for(let i = 0; i < Math.ceil(columns / 2); i++) {
      matrix[index].push(row[i]);
    }
  })
  return matrix;
}

// Create the pathfinding grids

const gameMatrixOriginal = buildMatrixOriginal(gameboardCells, gameRows, gameColumns);
const gameGridOriginal = new PF.Grid(gameMatrixOriginal);
export {gameGridOriginal};

const gameMatrixInsideOut = buildMatrixInsideOut(gameMatrixOriginal, gameboardCells, gameRows, gameColumns);
const gameGridInsideOut = new PF.Grid(gameMatrixInsideOut);
export {gameGridInsideOut};
