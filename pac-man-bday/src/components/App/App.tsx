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
  pacmanXPrevious: number,
  pacmanY: number,
  pacmanYPrevious: number,
  onSetTargetKeyboard: any,
  rowEndDoor: boolean,
  rowStartDoor: boolean,
  stalled: string,
  targetJunction: any,
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
      stalled,
      targetJunction,
      targetX, 
      targetY } = this.props;

    const diffX = targetX - pacmanX;
    const diffY = targetY - pacmanY;
    const diffXAbs = Math.abs(diffX);
    const diffYAbs = Math.abs(diffY);


    // First check if at target
    // Next check if near inline edge doors 
    // If stalled, need to get to a junction
    console.log(stalled);

    if (diffXAbs === 0 && diffYAbs === 0) {
      // if pacman at target, do nothing
    } else if(pacmanX < 2 && targetX > gameboardColumns - 3 && !currentCellBorders[3] && rowStartDoor ) {
      // if pacman is near left door, go through it
      onMovePacmanLeft();
    } else if (pacmanX > gameboardColumns - 3 && targetX < 2 && !currentCellBorders[1] && rowEndDoor ) {
      // if pacman is near right door, go through it
      onMovePacmanRight();
    } else if (pacmanY < 2 && targetY > gameboardRows - 3 && !currentCellBorders[0] && columnStartDoor ) {
      // if pacman is near top door, go through it
      onMovePacmanUp();
    } else if (pacmanY > gameboardRows - 3 && targetY < 2 && !currentCellBorders[2] && columnEndDoor ) {
      // if pacman is near bottom door, go through it
      onMovePacmanDown();
    } else if(stalled !== "none"){
      // if stalled, get to nearest unblocking junction
      console.log("pacman is stalled");
      console.log("targetJunction", targetJunction);
      console.log("targetJunction.x", targetJunction.x);
      console.log("targetJunction.y", targetJunction.y);
      if((stalled === "down" || stalled ==="up") && pacmanX < targetJunction.x && !currentCellBorders[1]) {
        console.log("trying to move right while stalled ", stalled );
        // if target is to the right
        // there is no wall to the right
        onMovePacmanRight();
      } else if ((stalled === "down") && pacmanX === targetJunction.x && !currentCellBorders[2] ) {
        console.log("making final move down to get unstalled ", stalled );
        // At junction, final move down to get unstalled
        onMovePacmanDown();
      } else if ((stalled === "down" || stalled ==="up") && pacmanX > targetJunction.x && !currentCellBorders[3] ) {
        console.log("trying to move left while stalled ", stalled );
        // if target is to the left
        // there is no wall to the left
        onMovePacmanLeft();
      } else if ((stalled === "up") && pacmanX === targetJunction.x && !currentCellBorders[0] ) {
        console.log("making final move up to get unstalled ", stalled );
        // At junction, final move up to get unstalled
        onMovePacmanUp();
      } else if ((stalled === "left" || stalled ==="right") && pacmanY > targetJunction.y && !currentCellBorders[0] ) {
        console.log("trying to move up while stalled ", stalled );
        // if target is up
        // there is no wall up
        onMovePacmanUp();
      } else if ((stalled === "left") && pacmanY === targetJunction.y && !currentCellBorders[3] ) {
        console.log("making final move up to get unstalled ", stalled );
        // At junction, final move up to get unstalled
        onMovePacmanLeft();
      } else if ((stalled === "left" || stalled ==="right") && pacmanY < targetJunction.y && !currentCellBorders[2]) {
        console.log("trying to move down while stalled ", stalled );
        // if target is down
        // there is no wall down
        onMovePacmanDown();
      } else if ((stalled === "right") && pacmanY === targetJunction.y && !currentCellBorders[1] ) {
        console.log("making final move right to get unstalled ", stalled );
        // At junction, final move right to get unstalled
        onMovePacmanRight();
      }
    } else if(diffXAbs > diffYAbs) {

      // If Pac-Man is furthest away from the target in the X, direction, 
      // Favor fixing the X direction first

      if(pacmanX < targetX && !currentCellBorders[1] ) {
        // if target is to the right
        // there is no wall to the right
        onMovePacmanRight();
      } else if (pacmanX > targetX && !currentCellBorders[3] ) {
        // if target is to the left
        // there is no wall to the left
        onMovePacmanLeft();
      } else if (pacmanY > targetY && !currentCellBorders[0] ) {
        // if target is up
        // there is no wall up
        onMovePacmanUp();
      } else if (pacmanY < targetY && !currentCellBorders[2] ) {
        // if target is down
        // there is no wall down
        onMovePacmanDown();
      } else if(pacmanX < targetX ) {
        // if target is to the right
        onMovePacmanRight();
      } else if (pacmanX > targetX ) {
        // if target is to the left
        onMovePacmanLeft();
      } else if (pacmanY > targetY ) {
        // if target is up
        onMovePacmanUp();
      } else if (pacmanY < targetY ) {
        // if target is down
        onMovePacmanDown();
      }
    } else {
      // Else if Pac-Man is furthest from target in the Y direction,
      // Favor fixing the Y direction first

      if (pacmanY > targetY && !currentCellBorders[0] ) {
        // if target is up
        // there is no wall up
        onMovePacmanUp();
      } else if (pacmanY < targetY && !currentCellBorders[2] ) {
        // if target is down
        // there is no wall down
        onMovePacmanDown();
      } else if(pacmanX < targetX && !currentCellBorders[1] ) {
        // if target is to the right
        // there is no wall to the right
        onMovePacmanRight();
      } else if (pacmanX > targetX && !currentCellBorders[3] ) {
        // if target is to the left
        // there is no wall to the left
        onMovePacmanLeft();
      }  else if (pacmanY > targetY ) {
        // if target is up
        onMovePacmanUp();
      } else if (pacmanY < targetY ) {
        // if target is down
        onMovePacmanDown();
      } else if(pacmanX < targetX ) {
        // if target is to the right
        onMovePacmanRight();
      } else if (pacmanX > targetX ) {
        // if target is to the left
        onMovePacmanLeft();
      } 
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
