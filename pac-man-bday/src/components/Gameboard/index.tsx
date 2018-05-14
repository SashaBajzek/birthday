import * as React from 'react';
import CellContainer from '../Cell/CellContainer';

import './Gameboard.css';
import gameboardCells from './gameboardCells';

class Gameboard extends React.Component<any, any> {
  public state = {
    cells: gameboardCells,
    columns: 10,
    gameSize: "large",
    rows: 6
  }
  public render() {
    return (
      <div className='Gameboard'>
        {this.state.cells.map((cell) => <CellContainer key = {cell.id} borders = {cell.borders} dot={cell.dot} item={cell.item} pacman={cell.pacman} traversable={cell.traversable} pacmanState={this.props.pacmanState} cellX={cell.x} cellY={cell.y}/>)}
      </div>
    );
  }
}

export default Gameboard;
