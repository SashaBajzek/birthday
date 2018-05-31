import * as PF from 'pathfinding';
import * as React from 'react';

import gameGrid from '../../pathfindingGrid';
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
  columnEndDoor: boolean,
  columnStartDoor: boolean,
  currentCellBorders: number[],
  gameboardColumns: number,
  gameboardRows: number,
  onMovePacmanDown: any,
  onMovePacmanLeft: any,
  onMovePacmanRight: any,
  onMovePacmanUp: any,
  pacmanX: number,
  pacmanY: number,
  onSetTargetKeyboard: any,
  rowEndDoor: boolean,
  rowStartDoor: boolean,
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
      onMovePacmanDown,
      onMovePacmanLeft,
      onMovePacmanRight,
      onMovePacmanUp,
      pacmanX, 
      pacmanY, 
      targetX, 
      targetY } = this.props;

    const backupGrid = gameGrid.clone();
    const finder = new PF.AStarFinder();
    const nextMove = finder.findPath(pacmanX, pacmanY, targetX, targetY, backupGrid);

    const diffX = targetX - pacmanX;
    const diffY = targetY - pacmanY;

    // TODO, need to incorporate doors in pathfinding

    if (diffX === 0 && diffY === 0) {
      // if pacman at target, do nothing
    } else if (nextMove.length > 0) {
      // Check if there is a nextMove
      if(nextMove[1][0] < pacmanX) {
        onMovePacmanLeft();
      } else if(nextMove[1][0] > pacmanX) {
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
