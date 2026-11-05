import {legacy_createStore as createStore} from 'redux'

import gameboardCells from './gameboardCells'
import {gameColumns, gameRows} from './pathfindingGrid'
import {pacman} from './reducers/index'

// A fresh store per call, so the prerender and the browser start from the same state.
export const makeStore = () =>
  createStore(pacman, {
    cells: gameboardCells,
    gameboardColumns: gameColumns,
    gameboardRows: gameRows,
    pacmanDirection: 'right',
    pacmanMouth: true,
    pacmanX: 0,
    pacmanY: 0,
    score: 0,
    targetVisible: false,
    targetX: 0,
    targetY: 0,
  })
