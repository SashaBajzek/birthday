import * as React from 'react';
import CellContainer from '../Cell/CellContainer';

import './Gameboard.css';

class Gameboard extends React.Component<any, any> {
  public render() {
    return (
      <div className='Gameboard'>
        {this.props.cells.map((cell: any) => <CellContainer key = {cell.id} borders = {cell.borders} dot={cell.dot} item={cell.item} traversable={cell.traversable} cellX={cell.x} cellY={cell.y}/>)}
      </div>
    );
  }
}

export default Gameboard;
