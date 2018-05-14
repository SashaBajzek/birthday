import { MOVE_PACMAN_DOWN, MOVE_PACMAN_LEFT, MOVE_PACMAN_RIGHT, MOVE_PACMAN_UP } from '../constants/index';
import { IStoreState } from '../types/index';

import { MovePacmanAction } from '../actions';

import update from 'immutability-helper';

function getCurrentCell(state: IStoreState) {
  let cell = state.cells.filter((obj: any) => {
    return obj.x === state.pacmanX
  });
  cell = cell.filter((obj: any) => {
    return obj.y === state.pacmanY
  });

  return cell[0];  
}

function getCell(state: IStoreState, x: number, y: number) {
  let cell = state.cells.filter((obj: any) => {
    return obj.x === x
  });
  cell = cell.filter((obj: any) => {
    return obj.y === y
  });

  return cell[0];  
}

function getCellId(state: IStoreState, x: number, y: number) {
  const cellId = state.cells.findIndex((obj: any) => {
    return obj.x === x && obj.y === y
  });
  return cellId;  
}

function getItemValue(cell: any) {
  if(cell.dot === "large") {
    return 10;
  } else if(cell.dot === "small") {
    return 1;
  } else {
    return 0;
  }
}

function moveDown(state: IStoreState) {
  const currentCell = getCurrentCell(state);
  if (currentCell.borders[2] === 0) {
    let newPacmanY: number = state.pacmanY;
    if(state.pacmanY + 1 === state.gameboardColumns) {
      newPacmanY = 0;
    } else {
      newPacmanY += 1;
    }
    const nextCellId = getCellId(state, state.pacmanX, newPacmanY);
    const nextCell = getCell(state, state.pacmanX, newPacmanY);
    const itemValue = getItemValue(nextCell);
    return update(state, {
      cells: {[nextCellId]: {dot: {$set: "none"}}},
      pacmanDirection: {$set: "down"}, 
      pacmanMouth: {$set: !state.pacmanMouth},
      pacmanY: {$set: newPacmanY},
      score: {$set: state.score +itemValue}
    })
  }
  else {
    return {
      ...state
    }
  }
}

function moveLeft(state: IStoreState) {
  const currentCell = getCurrentCell(state);
  if (currentCell.borders[3] === 0) {
    let newPacmanX: number = state.pacmanX;
    if(state.pacmanX - 1 < 0) {
      newPacmanX = state.gameboardColumns - 1;
    } else {
      newPacmanX -= 1;
    }
    const nextCellId = getCellId(state, newPacmanX, state.pacmanY);
    const nextCell = getCell(state, newPacmanX, state.pacmanY);
    const itemValue = getItemValue(nextCell);
    return update(state, {
      cells: {[nextCellId]: {dot: {$set: "none"}}},
      pacmanDirection: {$set: "left"}, 
      pacmanMouth: {$set: !state.pacmanMouth},
      pacmanX: {$set: newPacmanX},
      score: {$set: state.score +itemValue}
    })
  }
  else {
    return {
      ...state
    }
  }
}

function moveRight(state: IStoreState) {
  const currentCell = getCurrentCell(state);
  if (currentCell.borders[1] === 0) {
    let newPacmanX: number = state.pacmanX;
    if(state.pacmanX + 1 === state.gameboardColumns) {
      newPacmanX = 0;
    } else {
      newPacmanX += 1;
    }
    const nextCellId = getCellId(state, newPacmanX, state.pacmanY);
    const nextCell = getCell(state, newPacmanX, state.pacmanY);
    const itemValue = getItemValue(nextCell);
    return update(state, {
      cells: {[nextCellId]: {dot: {$set: "none"}}},
      pacmanDirection: {$set: "right"}, 
      pacmanMouth: {$set: !state.pacmanMouth},
      pacmanX: {$set: newPacmanX},
      score: {$set: state.score +itemValue}
    })
  }
  else {
    return {
      ...state
    }
  }
}

function moveUp(state: IStoreState) {
  const currentCell = getCurrentCell(state);
  if (currentCell.borders[0] === 0) {
    let newPacmanY: number = state.pacmanY;
    if(state.pacmanY - 1 < 0) {
      newPacmanY = state.gameboardColumns - 1;
    } else {
      newPacmanY -= 1;
    }
    const nextCellId = getCellId(state, state.pacmanX, newPacmanY);
    const nextCell = getCell(state, state.pacmanX, newPacmanY);
    const itemValue = getItemValue(nextCell);
    return update(state, {
      cells: {[nextCellId]: {dot: {$set: "none"}}},
      pacmanDirection: {$set: "up"}, 
      pacmanMouth: {$set: !state.pacmanMouth},
      pacmanY: {$set: newPacmanY},
      score: {$set: state.score +itemValue}
    })
  }
  else {
    return {
      ...state
    }
  }
}

export function pacman(state: IStoreState, action: MovePacmanAction): IStoreState {
  switch (action.type) {
    case MOVE_PACMAN_DOWN:
      return moveDown(state);
    case MOVE_PACMAN_LEFT:
      return moveLeft(state);
    case MOVE_PACMAN_RIGHT:
      return moveRight(state);
    case MOVE_PACMAN_UP:
      return moveUp(state);
  }
  return state;
}