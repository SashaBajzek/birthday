import { MOVE_PACMAN_DOWN, MOVE_PACMAN_LEFT, MOVE_PACMAN_RIGHT, MOVE_PACMAN_UP } from '../constants/index';
import { IStoreState } from '../types/index';

import { MovePacmanAction } from '../actions';

function getCurrentCell(state: IStoreState) {
  let cell = state.cells.filter((obj: any) => {
    return obj.x === state.pacmanX
  });
  cell = cell.filter((obj: any) => {
    return obj.y === state.pacmanY
  });

  return cell[0];  
}

function moveDown(state: IStoreState) {
  if (getCurrentCell(state).borders[2] === 0) {
    let newPacmanY: number = state.pacmanY;
    if(state.pacmanY + 1 === state.gameboardColumns) {
      newPacmanY = 0;
    } else {
      newPacmanY += 1;
    }
    return {
      ...state,
      pacmanDirection: "down", 
      pacmanMouth: !state.pacmanMouth,
      pacmanY: newPacmanY
    }
  }
  else {
    return {
      ...state
    }
  }
}

function moveLeft(state: IStoreState) {
  if (getCurrentCell(state).borders[3] === 0) {
    let newPacmanX: number = state.pacmanX;
    if(state.pacmanX - 1 < 0) {
      newPacmanX = state.gameboardColumns - 1;
    } else {
      newPacmanX -= 1;
    }
    return {
      ...state,
      pacmanDirection: "left",
      pacmanMouth: !state.pacmanMouth,
      pacmanX: newPacmanX
    }
  }
  else {
    return {
      ...state
    }
  }
}

function moveRight(state: IStoreState) {
  if (getCurrentCell(state).borders[1] === 0) {
    let newPacmanX: number = state.pacmanX;
    if(state.pacmanX + 1 === state.gameboardColumns) {
      newPacmanX = 0;
    } else {
      newPacmanX += 1;
    }
    return {
      ...state, 
      pacmanDirection: "right",
      pacmanMouth: !state.pacmanMouth,
      pacmanX: newPacmanX
    }
  }
  else {
    return {
      ...state
    }
  }
}

function moveUp(state: IStoreState) {
  if (getCurrentCell(state).borders[0] === 0) {
    let newPacmanY: number = state.pacmanY;
    if(state.pacmanY - 1 < 0) {
      newPacmanY = state.gameboardColumns - 1;
    } else {
      newPacmanY -= 1;
    }
    return {
      ...state,
      pacmanDirection: "up",
      pacmanMouth: !state.pacmanMouth,
      pacmanY: newPacmanY
    }
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