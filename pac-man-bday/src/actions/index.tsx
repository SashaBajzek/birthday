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

export interface ISetTarget {
  newX: number,
  newY: number,
  type: constants.SET_TARGET
}

export interface ISetTargetKeyboard {
  direction: string,
  type: constants.SET_TARGET_KEYBOARD
}

export type MovePacmanAction = IMovePacmanLeft | IMovePacmanRight | IMovePacmanUp | IMovePacmanDown | ISetTarget | ISetTargetKeyboard;

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

export function setTarget(newX: number, newY: number): ISetTarget {
  return {
    newX,
    newY,
    type: constants.SET_TARGET
  }
}

export function setTargetKeyboard(direction: string): ISetTargetKeyboard {
  return {
    direction,
    type: constants.SET_TARGET_KEYBOARD
  }
}
