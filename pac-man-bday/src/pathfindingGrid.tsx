import gameboardCells from './gameboardCells';

import * as PF from 'pathfinding';

let gameRows = 0;
gameboardCells.forEach((cell) => gameRows = Math.max(gameRows, cell.y));
gameRows++;

let gameColumns = 0;
gameboardCells.forEach((cell) => gameColumns = Math.max(gameColumns, cell.x));
gameColumns++;

const leftColumn = gameboardCells.filter((cell:any) => cell.x === 0);
let door: number;
leftColumn.forEach((cell:any) => {
  if(cell.borders[3] === 0) {
    door = cell.y;
  }
});


function getWalkable(cell:any) {
  if (cell.traversable === true) {
    return 0;
  } else {
    return 1;
  }
}

function buildMatrixOriginal(gameCells:any, rows:number, columns:number) {
  const matrix:any = [];
  let counter:number = 0;
  for(let j = 0; j < rows; j++) {
    matrix[j] = [];
    for(let i = 0; i < columns; i++) {
      matrix[j].push(getWalkable(gameCells[counter]));
      counter++;
    }
  }
  return matrix;
}

function buildMatrixInsideOut(origMatrix:any, gameCells:any, rows:number, columns:number) {
  const matrix:any = [];
  origMatrix.forEach((row: any, index: any) => {
    matrix[index] = [];
    for(let i = Math.ceil(columns / 2); i < columns; i++) {
      matrix[index].push(row[i]);
    }
    if(index === door) {
      matrix[index].push(0);
    } else {
      matrix[index].push(1);
    }
    for(let i = 0; i < Math.ceil(columns / 2); i++) {
      matrix[index].push(row[i]);
    }
  })
  return matrix;
}


const gameMatrixOriginal = buildMatrixOriginal(gameboardCells, gameRows, gameColumns);

const gameGridOriginal = new PF.Grid(gameMatrixOriginal);

export {gameGridOriginal};

const gameMatrixInsideOut = buildMatrixInsideOut(gameMatrixOriginal, gameboardCells, gameRows, gameColumns);

const gameGridInsideOut = new PF.Grid(gameMatrixInsideOut);

export {gameGridInsideOut};
