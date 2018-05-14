import update from 'immutability-helper'
import * as React from 'react';

import Gameboard from '../Gameboard';
import PacmanMovesContainer from '../PacmanMoves/PacmanMovesContainer';
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

class App extends React.Component<any, any> {
  private timerID: any;
  constructor(props: any) {
    super(props);
    this.state = {
      move: 0,
      pacmanState: {
        direction: "right",
        mouthOpen: true,
        stalled: false,
        x: 0,
        y: 0
      },
      target: {
        x: 3,
        y: 3
      }
    }
  }

  public pacmanMove() {
    if(this.state.pacmanState.x < this.state.target.x) {
      update(this.state, {
        pacmanState: {
          mouthOpen: {$set: false},
          x: {$set: 1}
        }
      })
    }

    this.setState({
      move: this.state.move + 1
    });
  }

  public componentDidMount() {
    this.timerID = setInterval(
      () => this.pacmanMove(),
      1000
    );
  }

  public componentWillUnmount() {
    clearInterval(this.timerID);
  }

  public render() {
    const birthday = {
      day: 26,
      month: 11 // December getMonth starts at 0
    };

    return (
      <div className="App">
        <h1>Is it Jeffrey's Birthday?</h1>
        { isTodayBirthday(birthday) ? <h2 className='birthday'>YES, Happy Birthday Jeffrey!</h2> :
        <h2>NO</h2> }
        <PacmanMovesContainer />
        <Gameboard pacmanState={this.state.pacmanState} target={this.state.target}/>
      </div>
    );
  }
}

export default App;
