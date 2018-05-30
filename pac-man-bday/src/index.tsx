import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppContainer from './components/App/AppContainer';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { MovePacmanAction } from './actions/index';

import { pacman } from './reducers/index';
import { IStoreState } from './types/index';

import gameboardCells from './gameboardCells';
import gameGrid from './pathfindingGrid';

console.log("gameGrid", gameGrid);

const store = createStore<IStoreState, MovePacmanAction, any, any>(pacman, {
  cells: gameboardCells,
  gameboardColumns: 33,
  gameboardRows: 19,
  grid: gameGrid,
  pacmanDirection: 'right',
  pacmanMouth: true,
  pacmanX: 0,
  pacmanXPrevious: -1,
  pacmanY: 0,
  pacmanYPrevious: -1,
  score: 0,
  stalled: "none",
  stalledTargetX: 0,
  stalledTargetY: 0,
  targetVisible: false,
  targetX: 0,
  targetY: 0
});

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
