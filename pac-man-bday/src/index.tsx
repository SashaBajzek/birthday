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
import { gameColumns, gameRows } from './pathfindingGrid';

const store = createStore<IStoreState, MovePacmanAction, any, any>(pacman, {
  blinkyDirection: 'up',
  blinkyWiggle: true,
  blinkyX: gameColumns - 1,
  blinkyY: 0,
  cells: gameboardCells,
  clydeDirection: 'up',
  clydeWiggle: true,
  clydeX: gameColumns - 2,
  clydeY: 0,
  gameboardColumns: gameColumns,
  gameboardRows: gameRows,
  inkyDirection: 'up',
  inkyWiggle: true,
  inkyX: gameColumns - 3,
  inkyY: 0,
  pacmanDirection: 'right',
  pacmanMouth: true,
  pacmanX: 0,
  pacmanY: 0,
  pinkyDirection: 'up',
  pinkyWiggle: true,
  pinkyX: gameColumns - 4,
  pinkyY: 0,
  score: 0,
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
