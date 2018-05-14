import { MOVE_PACMAN_DOWN, MOVE_PACMAN_LEFT, MOVE_PACMAN_RIGHT, MOVE_PACMAN_UP } from '../constants/index';
import { IStoreState } from '../types/index';

import { MovePacmanAction } from '../actions';

export function pacman(state: IStoreState, action: MovePacmanAction): IStoreState {
  switch (action.type) {
    case MOVE_PACMAN_DOWN:
      return { 
        ...state,
        pacmanDirection: "down", 
        pacmanMouth: !state.pacmanMouth,
        pacmanY: state.pacmanY + 1
      };
    case MOVE_PACMAN_LEFT:
      return { 
        ...state,
        pacmanDirection: "left",
        pacmanMouth: !state.pacmanMouth,
        pacmanX: state.pacmanX - 1
      };
    case MOVE_PACMAN_RIGHT:
      return {
        ...state, 
        pacmanDirection: "right",
        pacmanMouth: !state.pacmanMouth,
        pacmanX: state.pacmanX + 1, 
      };
    case MOVE_PACMAN_UP:
      return { 
        ...state,
        pacmanDirection: "up",
        pacmanMouth: !state.pacmanMouth,
        pacmanY: state.pacmanY - 1
      };
  }
  return state;
}