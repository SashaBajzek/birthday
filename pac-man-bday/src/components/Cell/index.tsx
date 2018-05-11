import * as React from 'react';
import Dot from '../Dot';
import './Cell.css';

interface IProps {
  borders: number[],
  dot: string,
  key: string,
  item: string,
  pacman: string,
  traversable: boolean
}

class Cell extends React.Component<IProps, any> {

  public getClasses = () => {
    let wallClasses: string = '';
    const borders = this.props.borders;

    // north
    if(borders[0] === 1) {
      wallClasses = 'wall--top';
    }

    // east
    if(borders[1] === 1) {
      wallClasses += ' wall--right';
    }

    // south
    if(borders[2] === 1) {
      wallClasses += ' wall--bottom';
    }

    // west
    if(borders[3] === 1) {
      wallClasses += ' wall--left';
    }

    // Apply border radius to corners

    // northeast
    if(borders[0] && borders[1]) {
      wallClasses += ' corner--NE'
    }

    // southeast
    if(borders[1] && borders[2]) {
      wallClasses += ' corner--SE'
    }

    // southwest
    if(borders[2] && borders[3]) {
      wallClasses += ' corner--SW'
    }

    // northwest
    if(borders[3] && borders[0]) {
      wallClasses += ' corner--NW'
    }

    return wallClasses;
  };

  public render() {
    const { dot } = this.props;
    return (
      <div className={`Cell ${this.getClasses()}`}>
        <Dot dotSize={dot} />
      </div>
    );
  }
}

export default Cell;