import * as constants from '../constants';

export interface IMovePacmanLeft {
  type: constants.MOVE_PACMAN_LEFT;
}

export interface IMovePacmanRight {
  type: constants.MOVE_PACMAN_RIGHT;
}

export interface IMovePacmanUp {
  type: constants.MOVE_PACMAN_UP;
}

export interface IMovePacmanDown {
  type: constants.MOVE_PACMAN_DOWN;
}

export type MovePacmanAction = IMovePacmanLeft | IMovePacmanRight | IMovePacmanUp | IMovePacmanDown;

export function movePacmanLeft(): IMovePacmanLeft {
  return {
    type: constants.MOVE_PACMAN_LEFT
  }
}

export function movePacmanRight(): IMovePacmanRight {
  return {
    type: constants.MOVE_PACMAN_RIGHT
  }
}

export function movePacmanUp(): IMovePacmanUp {
  return {
    type: constants.MOVE_PACMAN_UP
  }
}

export function movePacmanDown(): IMovePacmanDown {
  return {
    type: constants.MOVE_PACMAN_DOWN
  }
}
