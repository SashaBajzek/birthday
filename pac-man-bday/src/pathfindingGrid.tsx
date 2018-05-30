import gameboardCells from './gameboardCells';

import * as PF from 'pathfinding';

function getWalkable(cell:any) {
  if (cell.traversable === true) {
    return 0;
  } else {
    return 1;
  }
}

function buildMatrix(gameCells:any, rows:number, columns:number) {
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


const gameMatrix = buildMatrix(gameboardCells, 19, 33);

const gameGrid = new PF.Grid(gameMatrix);

export default gameGrid;
