import * as React from 'react';
import Cell from '../Cell';
import Target from '../Target';
import './Gameboard.css';

class Gameboard extends React.Component {
  public state = {
    cells: [
      {
        borders: [1, 0, 0, 1],
        dot: "large",
        id: "r0c0",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 0,
        y: 0
      },
      {
        borders: [1, 0, 1, 0],
        dot: "small",
        id: "r0c1",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 1,
        y: 0
      },
      {
        borders: [1, 0, 1, 0],
        dot: "small",
        id: "r0c2",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 2,
        y: 0
      },
      {
        borders: [1, 1, 0, 0],
        dot: "large",
        id: "r0c3",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 3,
        y: 0
      },
      {
        borders: [1, 0, 0, 1],
        dot: "none",
        id: "r0c4",
        item: "none",
        pacman: "none",
        traversable: false,
        x: 4,
        y: 0
      },
      {
        borders: [1, 1, 0, 0],
        dot: "none",
        id: "r0c5",
        item: "none",
        pacman: "none",
        traversable: false,
        x: 5,
        y: 0
      },
      {
        borders: [1, 0, 0, 1],
        dot: "large",
        id: "r0c6",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 6,
        y: 0
      },
      {
        borders: [1, 0, 1, 0],
        dot: "small",
        id: "r0c7",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 7,
        y: 0
      },
      {
        borders: [1, 0, 1, 0],
        dot: "small",
        id: "r0c8",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 8,
        y: 0
      },
      {
        borders: [1, 1, 0, 0],
        dot: "large",
        id: "r0c9",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 9,
        y: 0
      },
      {
        borders: [0, 1, 0, 1],
        dot: "small",
        id: "r1c0",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 0,
        y: 1
      },
      {
        borders: [1, 0, 0, 1],
        dot: "none",
        id: "r1c1",
        item: "none",
        pacman: "none",
        traversable: false,
        x: 1,
        y: 1
      },
      {
        borders: [1, 1, 0, 0],
        dot: "none",
        id: "r1c2",
        item: "none",
        pacman: "none",
        traversable: false,
        x: 2,
        y: 1
      },
      {
        borders: [0, 1, 0, 1],
        dot: "small",
        id: "r1c3",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 3,
        y: 1
      },
      {
        borders: [0, 0, 1, 1],
        dot: "none",
        id: "r1c4",
        item: "none",
        pacman: "none",
        traversable: false,
        x: 4,
        y: 1
      },
      {
        borders: [0, 1, 1, 0],
        dot: "none",
        id: "r1c5",
        item: "none",
        pacman: "none",
        traversable: false,
        x: 5,
        y: 1
      },
      {
        borders: [0, 1, 0, 1],
        dot: "small",
        id: "r1c6",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 6,
        y: 1
      },
      {
        borders: [1, 0, 0, 1],
        dot: "none",
        id: "r1c7",
        item: "none",
        pacman: "none",
        traversable: false,
        x: 7,
        y: 1
      },
      {
        borders: [1, 1, 0, 0],
        dot: "none",
        id: "r1c8",
        item: "none",
        pacman: "none",
        traversable: false,
        x: 8,
        y: 1
      },
      {
        borders: [0, 1, 0, 1],
        dot: "small",
        id: "r1c9",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 9,
        y: 1
      },
      {
        borders: [0, 1, 0, 1],
        dot: "small",
        id: "r2c0",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 0,
        y: 2
      },
      {
        borders: [0, 0, 1, 1],
        dot: "none",
        id: "r2c1",
        item: "none",
        pacman: "none",
        traversable: false,
        x: 1,
        y: 2
      },
      {
        borders: [0, 1, 1, 0],
        dot: "none",
        id: "r2c2",
        item: "none",
        pacman: "none",
        traversable: false,
        x: 2,
        y: 2
      },
      {
        borders: [0, 0, 0, 1],
        dot: "small",
        id: "r2c3",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 3,
        y: 2
      },
      {
        borders: [1, 0, 1, 0],
        dot: "small",
        id: "r2c4",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 4,
        y: 2
      },
      {
        borders: [1, 0, 1, 0],
        dot: "small",
        id: "r2c5",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 5,
        y: 2
      },
      {
        borders: [0, 1, 0, 0],
        dot: "small",
        id: "r2c6",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 6,
        y: 2
      },
      {
        borders: [0, 0, 1, 1],
        dot: "none",
        id: "r2c7",
        item: "none",
        pacman: "none",
        traversable: false,
        x: 7,
        y: 2
      },
      {
        borders: [0, 1, 1, 0],
        dot: "none",
        id: "r2c8",
        item: "none",
        pacman: "none",
        traversable: false,
        x: 8,
        y: 2
      },
      {
        borders: [0, 1, 0, 1],
        dot: "small",
        id: "r2c9",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 9,
        y: 2
      },
      {
        borders: [0, 0, 0, 0],
        dot: "small",
        id: "r3c0",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 0,
        y: 3
      },
      {
        borders: [1, 0, 1, 0],
        dot: "small",
        id: "r3c1",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 1,
        y: 3
      },
      {
        borders: [1, 0, 1, 0],
        dot: "small",
        id: "r3c2",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 2,
        y: 3
      },
      {
        borders: [0, 1, 1, 0],
        dot: "small",
        id: "r3c3",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 3,
        y: 3
      },
      {
        borders: [1, 0, 0, 1],
        dot: "none",
        id: "r3c4",
        item: "none",
        pacman: "none",
        traversable: false,
        x: 4,
        y: 3
      },
      {
        borders: [1, 1, 0, 0],
        dot: "none",
        id: "r3c5",
        item: "none",
        pacman: "none",
        traversable: false,
        x: 5,
        y: 3
      },
      {
        borders: [0, 0, 1, 1],
        dot: "small",
        id: "r3c6",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 6,
        y: 3
      },
      {
        borders: [1, 0, 0, 0],
        dot: "small",
        id: "r3c7",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 7,
        y: 3
      },
      {
        borders: [1, 0, 1, 0],
        dot: "small",
        id: "r3c8",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 8,
        y: 3
      },
      {
        borders: [0, 0, 0, 0],
        dot: "small",
        id: "r3c9",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 9,
        y: 3
      },
      {
        borders: [0, 1, 0, 1],
        dot: "small",
        id: "r4c0",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 0,
        y: 4
      },
      {
        borders: [1, 0, 1, 1],
        dot: "none",
        id: "r4c1",
        item: "none",
        pacman: "none",
        traversable: false,
        x: 1,
        y: 4
      },
      {
        borders: [1, 0, 1, 0],
        dot: "none",
        id: "r4c2",
        item: "none",
        pacman: "none",
        traversable: false,
        x: 2,
        y: 4
      },
      {
        borders: [1, 0, 1, 0],
        dot: "none",
        id: "r4c3",
        item: "none",
        pacman: "none",
        traversable: false,
        x: 3,
        y: 4
      },
      {
        borders: [0, 0, 1, 0],
        dot: "none",
        id: "r4c4",
        item: "none",
        pacman: "none",
        traversable: false,
        x: 4,
        y: 4
      },
      {
        borders: [0, 0, 1, 0],
        dot: "none",
        id: "r4c5",
        item: "none",
        pacman: "none",
        traversable: false,
        x: 5,
        y: 4
      },
      {
        borders: [1, 1, 1, 0],
        dot: "none",
        id: "r4c6",
        item: "none",
        pacman: "none",
        traversable: false,
        x: 6,
        y: 4
      },
      {
        borders: [0, 1, 0, 1],
        dot: "small",
        id: "r4c7",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 7,
        y: 4
      },
      {
        borders: [1, 1, 1, 1],
        dot: "none",
        id: "r4c8",
        item: "none",
        pacman: "none",
        traversable: false,
        x: 8,
        y: 4
      },
      {
        borders: [0, 1, 0, 1],
        dot: "small",
        id: "r4c9",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 9,
        y: 4
      },
      {
        borders: [0, 0, 1, 1],
        dot: "large",
        id: "r5c0",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 0,
        y: 5
      },
      {
        borders: [1, 0, 1, 0],
        dot: "small",
        id: "r5c1",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 1,
        y: 5
      },
      {
        borders: [1, 0, 1, 0],
        dot: "small",
        id: "r5c2",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 2,
        y: 5
      },
      {
        borders: [1, 0, 1, 0],
        dot: "small",
        id: "r5c3",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 3,
        y: 5
      },
      {
        borders: [1, 0, 1, 0],
        dot: "small",
        id: "r5c4",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 4,
        y: 5
      },
      {
        borders: [1, 0, 1, 0],
        dot: "small",
        id: "r5c5",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 5,
        y: 5
      },
      {
        borders: [1, 0, 1, 0],
        dot: "small",
        id: "r5c6",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 6,
        y: 5
      },
      {
        borders: [0, 0, 1, 0],
        dot: "small",
        id: "r5c7",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 7,
        y: 5
      },
      {
        borders: [1, 0, 1, 0],
        dot: "small",
        id: "r5c8",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 8,
        y: 5
      },
      {
        borders: [0, 1, 1, 0],
        dot: "large",
        id: "r5c9",
        item: "none",
        pacman: "none",
        traversable: true,
        x: 9,
        y: 5
      }
    ],
    columns: 3,
    gameSize: "large",
    rows: 1
  }
  public render() {
    return (
      <div className='Gameboard'>
        {this.state.cells.map((cell) => <Cell key = {cell.id} borders = {cell.borders} dot={cell.dot} item={cell.item} pacman={cell.pacman} traversable={cell.traversable}/>)}
        <Target />
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