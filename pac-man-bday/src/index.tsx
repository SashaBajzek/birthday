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

function getDoors(edgeLocation:any, cells:any[], gameboardColumns:any, gameboardRows:any) {
  const doorLocation:any = [];
  switch( edgeLocation ) {
    case "right":
      const rightColumn = cells.filter((cell:any) => cell.x === gameboardColumns - 1);
      rightColumn.forEach((cell:any) => {
        if(cell.borders[1] === 0) {
          doorLocation.push([cell.x, cell.y]);
        }
      });
      break;
    case "left":
      const leftColumn = cells.filter((cell:any) => cell.x === 0);
      leftColumn.forEach((cell:any) => {
        if(cell.borders[3] === 0) {
          doorLocation.push([cell.x, cell.y]);
        }
      });
      break;
    default: 
      break;
  }
  return doorLocation;
}

const store = createStore<IStoreState, MovePacmanAction, any, any>(pacman, {
  cells: gameboardCells,
  doorLeft: getDoors("left", gameboardCells, 33, 19),
  doorRight: getDoors("right", gameboardCells, 33, 19),
  doorTargetX: 0,
  doorTargetY: 0,
  gameboardColumns: 33,
  gameboardRows: 19,
  pacmanDirection: 'right',
  pacmanMouth: true,
  pacmanX: 0,
  pacmanXPrevious: -1,
  pacmanY: 0,
  pacmanYPrevious: -1,
  score: 0,
  targetVisible: false,
  targetX: 0,
  targetY: 0,
  travellingToDoor: false
});

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
