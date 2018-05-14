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

const store = createStore<IStoreState, MovePacmanAction, any, any>(pacman, {
  cells: gameboardCells,
  gameboardColumns: 10,
  gameboardRows: 6,
  pacmanDirection: 'right',
  pacmanMouth: true,
  pacmanX: 0,
  pacmanY: 0,
  score: 0,
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
