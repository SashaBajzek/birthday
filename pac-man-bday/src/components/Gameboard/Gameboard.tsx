import * as React from 'react';
import CellContainer from '../Cell/CellContainer';

import './Gameboard.css';

class Gameboard extends React.Component<any, any> {
  public render() {
    return (
      <div className='Gameboard'>
        {this.props.cells.map((cell: any) => <CellContainer key = {cell.id} id = {cell.id}/>)}
      </div>
    );
  }
}

export default Gameboard;
