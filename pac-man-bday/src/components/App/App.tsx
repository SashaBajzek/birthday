import * as React from 'react';

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
  stalled: boolean,
  targetX: number,
  targetY: number
}

class App extends React.Component<IProps, any> {
  private timerID: any;

  public handleKeyDown (e: any) {
    switch( e.keyCode ) {
      case 40:
        this.props.onSetTargetKeyboard("down");
        this.pacmanMove();
        break;
      case 37:
        this.props.onSetTargetKeyboard("left");
        this.pacmanMove();
        break;
      case 39:
        this.props.onSetTargetKeyboard("right");
        this.pacmanMove();
        break;
      case 38:
        this.props.onSetTargetKeyboard("up");
        this.pacmanMove();
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
      columnEndDoor,
      columnStartDoor,
      currentCellBorders,
      gameboardColumns,
      gameboardRows,
      onMovePacmanDown,
      onMovePacmanLeft,
      onMovePacmanRight,
      onMovePacmanUp,
      pacmanX, 
      pacmanY, 
      rowEndDoor,
      rowStartDoor,
      targetX, 
      targetY } = this.props;

    const diffX = targetX - pacmanX;
    const diffY = targetY - pacmanY;
    const diffXAbs = Math.abs(diffX);
    const diffYAbs = Math.abs(diffY);

    if (diffXAbs === 0 && diffYAbs === 0) {
      // if pacman at target, do nothing
    } else if(pacmanX < 2 && targetX === gameboardColumns - 1 && !currentCellBorders[3] && rowStartDoor ) {
      // if pacman is near door, go through it
      onMovePacmanLeft();
    } else if (pacmanX > gameboardColumns - 3 && targetX === 0 && !currentCellBorders[1] && rowEndDoor ) {
      // if pacman is near door, go through it
      onMovePacmanRight();
    } else if (pacmanY < 2 && targetY === gameboardRows - 1 && !currentCellBorders[0] && columnStartDoor ) {
      // if pacman is near door, go through it
      onMovePacmanUp();
    } else if (pacmanY > gameboardRows - 3 && targetY === 0 && !currentCellBorders[2] && columnEndDoor ) {
      // if pacman is near door, go through it
      onMovePacmanDown();
    } else if(pacmanX < targetX) {
      onMovePacmanRight();
    } else if (pacmanX > targetX) {
      onMovePacmanLeft();
    } else if (pacmanY > targetY) {
      onMovePacmanUp();
    } else if (pacmanY < targetY) {
      onMovePacmanDown();
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
