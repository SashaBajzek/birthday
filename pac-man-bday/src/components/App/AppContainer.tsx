import { connect, Dispatch } from 'react-redux';
import * as actions from '../../actions/';
import { IStoreState } from '../../types/index';
import App from './App';

function getCellBorders(cells: any, x: number, y: number) {
  let cell = cells.filter((obj: any) => {
    return obj.x === x
  });
  cell = cell.filter((obj: any) => {
    return obj.y === y
  });

  return cell[0].borders;  
}

export function mapStateToProps({ cells, gameboardColumns, gameboardRows, pacmanDirection, pacmanMouth, pacmanX, pacmanXPrevious, pacmanY, pacmanYPrevious, stalled, targetX, targetY }: IStoreState) {
  return {
    columnEndDoor: !getCellBorders(cells, pacmanX, gameboardRows - 1)[2],
    columnStartDoor: !getCellBorders(cells, pacmanX, 0)[0],
    currentCellBorders: getCellBorders(cells, pacmanX, pacmanY),
    gameboardColumns,
    gameboardRows,
    pacmanDirection,
    pacmanMouth,
    pacmanX,
    pacmanXPrevious,
    pacmanY,
    pacmanYPrevious,
    rowEndDoor: !getCellBorders(cells, gameboardColumns - 1, pacmanY)[1],
    rowStartDoor: !getCellBorders(cells, 0, pacmanY)[3],
    stalled,
    targetX,
    targetY
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.MovePacmanAction>) {
  return {
    onMovePacmanDown: () => dispatch(actions.movePacmanDown()),
    onMovePacmanLeft: () => dispatch(actions.movePacmanLeft()),
    onMovePacmanRight: () => dispatch(actions.movePacmanRight()),
    onMovePacmanUp: () => dispatch(actions.movePacmanUp()),
    onSetStalled: (stalled: boolean) => dispatch(actions.setStalled(stalled)),
    onSetTargetKeyboard: (direction: string) => dispatch(actions.setTargetKeyboard(direction))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
