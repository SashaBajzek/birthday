import * as PF from 'pathfinding';
import * as React from 'react';

import { gameGridInsideOut, gameGridOriginal } from '../../pathfindingGrid';
import GameboardContainer from '../Gameboard/GameboardContainer';
import ScoreboardContainer from '../Scoreboard/ScoreboardContainer';
import './App.css';

interface IBirthday {
  month: number,
  day: number
};

function isTodayBirthday(birthday: IBirthday) {
  const today = new Date();
  const todayMonth = today.getMonth();
  const todayDay = today.getDate();
  if(birthday.month === todayMonth && birthday.day === todayDay) {
    return true;
  } else {
    return false;
  }
}

interface IProps {
  gameboardColumns: number,
  gameboardRows: number,
  onMovePacmanDown: any,
  onMovePacmanLeft: any,
  onMovePacmanRight: any,
  onMovePacmanUp: any,
  pacmanX: number,
  pacmanY: number,
  onSetTargetKeyboard: any,
  targetX: number,
  targetY: number
}

class App extends React.Component<IProps, any> {
  private timerID: any;

  public handleKeyDown (e: any) {
    switch( e.keyCode ) {
      case 40:
        this.props.onSetTargetKeyboard("down");
        this.props.onMovePacmanDown();
        break;
      case 37:
        this.props.onSetTargetKeyboard("left");
        this.props.onMovePacmanLeft();
        break;
      case 39:
        this.props.onSetTargetKeyboard("right");
        this.props.onMovePacmanRight();
        break;
      case 38:
        this.props.onSetTargetKeyboard("up");
        this.props.onMovePacmanUp();
        break;
      default: 
        break;
    }
  }

  public componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this));

    this.timerID = setInterval(
      () => this.pacmanMove(),
      300
    );
  }

  public componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown.bind(this));

    clearInterval(this.timerID);
  }

  public pacmanMove() {
    const { 
      gameboardColumns,
      onMovePacmanDown,
      onMovePacmanLeft,
      onMovePacmanRight,
      onMovePacmanUp,
      pacmanX, 
      pacmanY, 
      targetX, 
      targetY } = this.props;

    // Build the path for the original pathfinding grid
    const backupGrid1 = gameGridOriginal.clone();
    const finder1 = new PF.AStarFinder();
    const nextMove1 = finder1.findPath(pacmanX, pacmanY, targetX, targetY, backupGrid1);

    // Make a second set of pacmanX and targetX location for the second pathfinding grid
    // Since the first and second halfs of the grid have been rearranged
    let pacmanXInsideOut: number;
    if(pacmanX < Math.ceil(gameboardColumns / 2)) {
      pacmanXInsideOut = pacmanX + Math.ceil(gameboardColumns / 2);
    } else {
      pacmanXInsideOut = pacmanX - Math.ceil(gameboardColumns / 2);
    }

    let targetXInsideOut: number;
    if(targetX < Math.ceil(gameboardColumns / 2)) {
      targetXInsideOut = targetX + Math.ceil(gameboardColumns / 2);
    } else {
      targetXInsideOut = targetX - Math.ceil(gameboardColumns / 2);
    }

    // Build the path for the second pathfinding grid made for going through the door
    const backupGrid2 = gameGridInsideOut.clone();
    const finder2 = new PF.AStarFinder();
    const nextMove2 = finder2.findPath(pacmanXInsideOut, pacmanY, targetXInsideOut, targetY, backupGrid2);

    let nextMove: any;
    let nextPacman: any;

    // Choose the shortest path between walking across the board or taking the door
    if(nextMove1.length > nextMove2.length) {
      // pacman goes through the door
      nextMove = nextMove2;
      nextPacman = pacmanXInsideOut;
    } else {
      // pacman walks across the board
      nextMove = nextMove1;
      nextPacman = pacmanX;
    }

    const diffX = targetX - pacmanX;
    const diffY = targetY - pacmanY;

    if (diffX === 0 && diffY === 0) {
      // if pacman at target, do nothing
    } else if (nextMove.length > 0) {
      // Check if there is a nextMove
      if(nextMove[1][0] < nextPacman) {
        onMovePacmanLeft();
      } else if(nextMove[1][0] > nextPacman) {
        onMovePacmanRight();
      } else if(nextMove[1][1] < pacmanY) {
        onMovePacmanUp();
      } else if(nextMove[1][1] > pacmanY) {
        onMovePacmanDown();
      }
    } else {
      // Do nothing
    }
  }

  public render() {
    const birthday = {
      day: 26,
      month: 11 // December getMonth starts at 0
    };

    return (
      <div className='App'>
        <div>
          <header className='header'>
            <h1 className='header__heading'>Is it Jeffrey's Birthday?</h1>
            { isTodayBirthday(birthday) ? <h2 className='header__heading birthday'>YES, Happy Birthday Jeffrey!</h2> :
            <h2 className='header__heading'>NO</h2> }
          </header>
          <ScoreboardContainer />
          <GameboardContainer />
        </div>
      </div>
    );
  }
}

export default App;
