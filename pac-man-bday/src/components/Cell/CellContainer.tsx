import { connect, Dispatch } from 'react-redux';
import * as actions from '../../actions/';
import { IStoreState } from '../../types/index';
import Cell from './Cell';

function pacmanPresent(pacmanX: number, pacmanY: number, cellX: number, cellY: number) {
  if(pacmanX === cellX && pacmanY === cellY) {
    return true;
  } else {
    return false;
  }
}

function blinkyPresent(blinkyX: number, blinkyY: number, cellX: number, cellY: number) {
  if(blinkyX === cellX && blinkyY === cellY) {
    return true;
  } else {
    return false;
  }
}

function clydePresent(clydeX: number, clydeY: number, cellX: number, cellY: number) {
  if(clydeX === cellX && clydeY === cellY) {
    return true;
  } else {
    return false;
  }
}

function inkyPresent(inkyX: number, inkyY: number, cellX: number, cellY: number) {
  if(inkyX === cellX && inkyY === cellY) {
    return true;
  } else {
    return false;
  }
}

function pinkyPresent(pinkyX: number, pinkyY: number, cellX: number, cellY: number) {
  if(pinkyX === cellX && pinkyY === cellY) {
    return true;
  } else {
    return false;
  }
}

function targetPresent(targetX: number, targetY: number, cellX: number, cellY: number) {
  if(targetX === cellX && targetY === cellY) {
    return true;
  } else {
    return false;
  }
}

function getCell(cells: any, id: string) {
  return cells.filter((cell: any) => cell.id === id)[0];
}

export function mapStateToProps({ blinkyX, blinkyY, clydeX, clydeY,cells, inkyX, inkyY, pacmanX, pacmanY, pinkyX, pinkyY, targetVisible, targetX, targetY }: IStoreState, ownProps: any) {
  const cell = getCell(cells, ownProps.id);
  return {
    blinkyPresent: blinkyPresent(blinkyX, blinkyY, cell.x, cell.y),
    cell,
    clydePresent: clydePresent(clydeX, clydeY, cell.x, cell.y),
    inkyPresent: inkyPresent(inkyX, inkyY, cell.x, cell.y),
    pacmanPresent: pacmanPresent(pacmanX, pacmanY, cell.x, cell.y),
    pinkyPresent: pinkyPresent(pinkyX, pinkyY, cell.x, cell.y),
    targetPresent: targetPresent(targetX, targetY, cell.x, cell.y),
    targetVisible
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.MovePacmanAction>) {
  return {
    onSetTarget: (newX: number, newY: number) => dispatch(actions.setTarget(newX, newY))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
