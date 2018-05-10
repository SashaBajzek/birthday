import * as React from 'react';
import Dot from '../Dot';
import Target from '../Target';
import Wall from '../Wall';
import './Gameboard.css';

class Gameboard extends React.Component {
  public render() {
    return (
      <div className='Gameboard'>
        Gameboard
        <Dot dotSize={'large'} />
        <Dot dotSize={'small'} />
        <Target />
        <Wall />
      </div>
    );
  }
}

export default Gameboard;


/*
var gameboard = {
  columns: 0,
  height: window.innerHeight,
  layout: [],
  minorTicks: 5,
  movementSpace: 0,
  rows: 0,
  spacing: 100,
  width: window.innerWidth
};

if(window.innerWidth < 640) {
  gameboard.spacing = 100;
  gameboard.minorTicks = 5;
}

gameboard.columns = Math.floor(gameboard.width / gameboard.spacing) + 1;

gameboard.rows = Math.floor(gameboard.height / gameboard.spacing) + 1;

gameboard.movementSpace = gameboard.spacing / gameboard.minorTicks;

// After rows and spacing determined, set final board dimensions

gameboard.height = (gameboard.rows - 1) * gameboard.spacing;
gameboard.width = (gameboard.columns - 1) * gameboard.spacing;
*/