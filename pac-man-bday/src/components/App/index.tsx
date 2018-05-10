import * as React from 'react';
import Gameboard from '../Gameboard';
import Pacman from '../Pacman';
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

class App extends React.Component {
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
        <Gameboard />
        <Pacman />
      </div>
    );
  }
}

export default App;
