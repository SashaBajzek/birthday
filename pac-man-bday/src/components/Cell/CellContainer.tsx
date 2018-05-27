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

export function mapStateToProps({ cells, pacmanX, pacmanY, targetVisible, targetX, targetY }: IStoreState, ownProps: any) {
  const cell = getCell(cells, ownProps.id);
  return {
    cell,
    pacmanPresent: pacmanPresent(pacmanX, pacmanY, cell.x, cell.y),
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




/*
borders = {cell.borders} dot={cell.dot} item={cell.item} traversable={cell.traversable} cellX={cell.x} cellY={cell.y}

*/