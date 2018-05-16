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

// Need function to find nearest junction that has opening in stalled direction

function getTargetJunction(cells: any, pacmanX: number, pacmanY: number, stalled: string) {
  if(stalled === "down") {
    const rowCells = cells.filter((obj: any) => {
      return obj.traversable && obj.y === pacmanY;
    });

    const rowCellsWithDownPath = rowCells.filter((obj: any) => {
      // TODO:  NEED TO BOUND THE AVAILABLE ROW CELLS BY LEFT AND RIGHT BORDERS!!!!!!
      return obj.borders[2] === 0;
    });

    // Find nearest junction with down path
    // TODO:  have it take into account doors
    const distancesFromCurrentLocation = rowCellsWithDownPath.map((cell: any) => {
      return Math.abs(cell.x - pacmanX);
    });

    const minDistance = Math.min(...distancesFromCurrentLocation);
    const targetJunctionIndex = distancesFromCurrentLocation.indexOf(minDistance);
    const targetJunctionCell = rowCellsWithDownPath[targetJunctionIndex];

    if (getCellBorders(cells, pacmanX, pacmanY)[2] === 1) {
      // get to the junction first
      return targetJunctionCell;
    } else {
      // once made it to junction, finally move down
      const finalTargetJunctionCell = {
        x: targetJunctionCell.x,
        y: targetJunctionCell.y + 1
      }
      // !!!!!!!!!  when I used targetJunctionCell.y += 1, it changed the actual cell location in the state.  I think targetJunctionCell is actually pointing to the state which is NOT GOOD!!!!
      return finalTargetJunctionCell;
    }
  } else if(stalled === "up") {
    const rowCells = cells.filter((obj: any) => {
      return obj.traversable && obj.y === pacmanY;
    })
    const rowCellsWithUpPath = rowCells.filter((obj: any) => {
      return obj.borders[0] === 0;
    })
    // Find nearest junction with up path
    // TODO:  have it take into account doors!!!
    const distancesFromCurrentLocation = rowCellsWithUpPath.map((cell: any) => {
      return Math.abs(cell.x - pacmanX);
    });

    const minDistance = Math.min(...distancesFromCurrentLocation);

    const targetJunctionIndex = distancesFromCurrentLocation.indexOf(minDistance);

    const targetJunctionCell = rowCellsWithUpPath[targetJunctionIndex];

    console.log("stalled up targetJunctionCell", targetJunctionCell);

    if (getCellBorders(cells, pacmanX, pacmanY)[0] === 1) {
      // get to the junction first
      return targetJunctionCell;
    } else {
      // once made it to junction, finally move down
      const finalTargetJunctionCell = {
        x: targetJunctionCell.x,
        y: targetJunctionCell.y - 1
      }
      // !!!!!!!!!  when I used targetJunctionCell.y += 1, it changed the actual cell location in the state.  I think targetJunctionCell is actually pointing to the state which is NOT GOOD!!!!
      return finalTargetJunctionCell;
    }

  } else if(stalled === "left") {
    const columnCells = cells.filter((obj: any) => {
      return obj.traversable && obj.x === pacmanX;
    })
    const columnCellsWithLeftPath = columnCells.filter((obj: any) => {
      return obj.borders[3] === 0;
    })
    // Find nearest junction with Left path
    // TODO:  have it take into account doors!!!
    const distancesFromCurrentLocation = columnCellsWithLeftPath.map((cell: any) => {
      return Math.abs(cell.y - pacmanY);
    });

    const minDistance = Math.min(...distancesFromCurrentLocation);

    const targetJunctionIndex = distancesFromCurrentLocation.indexOf(minDistance);

    const targetJunctionCell = columnCellsWithLeftPath[targetJunctionIndex];

    console.log("targetJunctionCell stalled left", targetJunctionCell);

    if (getCellBorders(cells, pacmanX, pacmanY)[3] === 1) {
      // get to the junction first
      return targetJunctionCell;
    } else {
      // once made it to junction, finally move left
      const finalTargetJunctionCell = {
        x: targetJunctionCell.x - 1,
        y: targetJunctionCell.y
      }
      // !!!!!!!!!  when I used targetJunctionCell.y += 1, it changed the actual cell location in the state.  I think targetJunctionCell is actually pointing to the state which is NOT GOOD!!!!
      return finalTargetJunctionCell;
    }

  } else if(stalled === "right") {
    const columnCells = cells.filter((obj: any) => {
      return obj.traversable && obj.x === pacmanX;
    })
    const columnCellsWithRightPath = columnCells.filter((obj: any) => {
      return obj.borders[1] === 0;
    })
    // Find nearest junction with Right path
    // TODO:  have it take into account doors!!!
    const distancesFromCurrentLocation = columnCellsWithRightPath.map((cell: any) => {
      return Math.abs(cell.y - pacmanY);
    });

    const minDistance = Math.min(...distancesFromCurrentLocation);

    const targetJunctionIndex = distancesFromCurrentLocation.indexOf(minDistance);

    const targetJunctionCell = columnCellsWithRightPath[targetJunctionIndex];

    console.log("targetJunctionCell stalled right", targetJunctionCell);

    if (getCellBorders(cells, pacmanX, pacmanY)[1] === 1) {
      // get to the junction first
      return targetJunctionCell;
    } else {
      // once made it to junction, finally move right
      const finalTargetJunctionCell = {
        x: targetJunctionCell.x + 1,
        y: targetJunctionCell.y
      }
      // !!!!!!!!!  when I used targetJunctionCell.y += 1, it changed the actual cell location in the state.  I think targetJunctionCell is actually pointing to the state which is NOT GOOD!!!!
      return finalTargetJunctionCell;
    }

  } else {
    return {
      x: pacmanX, 
      y: pacmanY
    }
  }



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
    targetJunction: getTargetJunction(cells, pacmanX, pacmanY, stalled),
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
