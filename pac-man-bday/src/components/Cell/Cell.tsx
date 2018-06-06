import * as React from 'react';
import Dot from '../Dot';

import BlinkyContainer from '../Blinky/BlinkyContainer';
import ClydeContainer from '../Clyde/ClydeContainer';
import InkyContainer from '../Inky/InkyContainer';
import PacmanContainer from '../Pacman/PacmanContainer';
import PinkyContainer from '../Pinky/PinkyContainer';
import Target from '../Target';
import './Cell.css';

interface IProps {
  blinkyPresent: any,
  borders: number[],
  // cellX: number,
  // cellY: number,
  cell: any,
  clydePresent: any,
  dot: string,
  key: string,
  inkyPresent: any,
  item: string,
  onSetTarget: any,
  // pacmanX: number,
  // pacmanY: number,
  pacmanPresent: any,
  pinkyPresent: any,
  targetPresent: any,
  targetVisible: boolean,
  // targetX: number,
  // targetY: number,
  traversable: boolean
}

class Cell extends React.Component<IProps, any> {

  public getClasses = () => {
    let wallClasses: string = '';
    const borders = this.props.cell.borders;

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

  public handleClick = () => {
    if (this.props.cell.traversable) {
      return this.props.onSetTarget(this.props.cell.x, this.props.cell.y);
    }
  }

  public render() {
    const { blinkyPresent, cell, clydePresent, inkyPresent, pacmanPresent, pinkyPresent, targetPresent, targetVisible } = this.props;
    return (
      <div className={`Cell ${this.getClasses()}`} onClick={this.handleClick}>
        <Dot dotSize={cell.dot} />
        { pacmanPresent ? <PacmanContainer /> : "" }
        { blinkyPresent ? <BlinkyContainer /> : "" }
        { clydePresent ? <ClydeContainer /> : "" }
        { inkyPresent ? <InkyContainer /> : "" }
        { pinkyPresent ? <PinkyContainer /> : "" }
        { targetPresent && targetVisible ? <Target /> : "" }
      </div>
    );
  }
}

export default Cell;
