import { MOVE_PACMAN_DOWN, MOVE_PACMAN_LEFT, MOVE_PACMAN_RIGHT, MOVE_PACMAN_UP, SET_STALLED, SET_TARGET, SET_TARGET_KEYBOARD } from '../constants/index';
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
      pacmanYPrevious: {$set: state.pacmanY},
      score: {$set: state.score +itemValue},
      stalled: {$apply: (stalled: string) => {
        if(stalled === "none") {
          return "none";
        } else if(stalled === "down") {
          // if Y direction matches target, down stall is over
          if(newPacmanY === state.targetY) {
            return "none";
          } else {
            return stalled;
          }
        } else {
          // if stall is in another direction, keep that stall
          return stalled;
        }
      }}
    })
  }
  else {
    // if can't move down due to wall, set stall to "down"
    if (currentCell.borders[2] === 1) {
      return update(state, {
        stalled: {$set: "down"}
      })
    } else if (state.targetX > state.pacmanX) {
      // if there is no wall to the down, then it is really stalled "left" or "right"
      return update(state, {
        stalled: {$set: "right"}
      })
    } else {
      // if there is no wall to the down, then it is really stalled "left" or "right"
      return update(state, {
        stalled: {$set: "left"}
      })
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
      pacmanXPrevious: {$set: state.pacmanX},
      score: {$set: state.score +itemValue},
      stalled: {$apply: (stalled: string) => {
        if(stalled === "none") {
          return "none";
        } else if(stalled === "left") {
          // if X direction matches target, down stall is over
          if(newPacmanX === state.targetX) {
            return "none";
          } else {
            return stalled;
          }
        } else {
          // if stall is in another direction, keep that stall
          console.log("moveleft reducer, original stalled", stalled);
          return stalled;
        }
      }}
    })
  }
  else {
    // if can't move left due to wall, set stall to "left"
    if (currentCell.borders[3] === 1) {
      return update(state, {
        stalled: {$set: "left"}
      })
    } else if(state.targetY > state.pacmanY) {
      // if there is no wall to the left, then it is really stalled "up" or "down"
      return update(state, {
        stalled: {$set: "down"}
      })
    } else {
      // if there is no wall to the left, then it is really stalled "up" or "down"
      return update(state, {
        stalled: {$set: "up"}
      })
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
      pacmanXPrevious: {$set: state.pacmanX},
      score: {$set: state.score +itemValue},
      stalled: {$apply: (stalled: string) => {
        if(stalled === "none") {
          return "none";
        } else if(stalled === "right") {
          // if X direction matches target, right stall is over
          if(newPacmanX === state.targetX) {
            return "none";
          } else {
            return stalled;
          }
        } else {
          // if stall is in another direction, keep that stall
          console.log("moveright reducer, original stalled", stalled);
          return stalled;
        }
      }}
    })
  }
  else {
    // if can't move right due to wall, set stall to "right"
    if (currentCell.borders[1] === 1) {
      return update(state, {
        stalled: {$set: "right"}
      })
    } else if(state.targetY > state.pacmanY) {
      // if there is no wall to the right, then it is really stalled "down" or "up"
      return update(state, {
        stalled: {$set: "up"}
      })
    } else {
      // if there is no wall to the right, then it is really stalled "down" or "up"
      return update(state, {
        stalled: {$set: "down"}
      })
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
      pacmanYPrevious: {$set: state.pacmanY},
      score: {$set: state.score +itemValue},
      stalled: {$apply: (stalled: string) => {
        if(stalled === "none") {
          return "none";
        } else if(stalled === "up") {
          // if Y direction matches target, down stall is over
          if(newPacmanY === state.targetY) {
            return "none";
          } else {
            return stalled;
          }
        } else {
          // if stall is in another direction, keep that stall
          console.log("moveup reducer, original stalled", stalled);
          return stalled;
        }
      }}
    })
  }
  else {
    // if can't move up due to wall, set stall to "up"
    if (currentCell.borders[0] === 1) {
      return update(state, {
        stalled: {$set: "up"}
      })
    } else if(state.targetX > state.pacmanX) {
      // if there is no wall up, then it is really stalled "left" or "right"
      return update(state, {
        stalled: {$set: "right"}
      })
    } else {
      // if there is no wall up, then it is really stalled "left" or "right"
      return update(state, {
        stalled: {$set: "left"}
      })
    } 
  }
}

function setTarget(state: IStoreState, newX: number, newY: number) {
  return update(state, {
    stalled: {$set: "none"}, // if choosing new target, clear the stall
    targetVisible: {$set: true}, // only want to show target when clicking targets, not when keyboarding
    targetX: {$set: newX},
    targetY: {$set: newY}
  })
}

function setTargetKeyboard(state: IStoreState, direction: string) {
  const currentCell = getCurrentCell(state);
  let newPacmanX: number = state.pacmanX;
  let newPacmanY: number = state.pacmanY;

  if(direction === "down"){
    if (currentCell.borders[2] === 0) {
      if(state.pacmanY + 1 === state.gameboardColumns) {
        newPacmanY = 0;
      } else {
        newPacmanY += 1;
      }
    }
  } else if (direction === "left"){
    if (currentCell.borders[3] === 0) {
      if(state.pacmanX - 1 < 0) {
        newPacmanX = state.gameboardColumns - 1;
      } else {
        newPacmanX -= 1;
      }
    }
  } else if (direction === "right"){
    if (currentCell.borders[1] === 0) {
      if(state.pacmanX + 1 === state.gameboardColumns) {
        newPacmanX = 0;
      } else {
        newPacmanX += 1;
      }
    }
  } else if (direction === "up"){
    if (currentCell.borders[0] === 0) {
      if(state.pacmanY - 1 < 0) {
        newPacmanY = state.gameboardColumns - 1;
      } else {
        newPacmanY -= 1;
      }
    }
  }

  return update(state, {
    stalled: {$set: "none"}, // when switching to keyboard, stalled no longer applies
    targetVisible: {$set: false}, // only want to show target when clicking targets, not when keyboarding
    targetX: {$set: newPacmanX},
    targetY: {$set: newPacmanY}
  })
}

function setStalled(state: IStoreState, stalled: boolean) {
  return update(state, {
    stalled: {$set: stalled}
  })
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
    case SET_TARGET:
      return setTarget(state, action.newX, action.newY);
    case SET_TARGET_KEYBOARD:
      return setTargetKeyboard(state, action.direction);
    case SET_STALLED:
      return setStalled(state, action.stalled);
  }
  return state;
}