import { connect, Dispatch } from 'react-redux';
import * as actions from '../../actions/';
import { IStoreState } from '../../types/index';
import App from './App';

export function mapStateToProps({ cells, gameboardColumns, gameboardRows, pacmanDirection, pacmanMouth, pacmanX, pacmanY, targetX, targetY }: IStoreState) {
  return {
    gameboardColumns,
    gameboardRows,
    pacmanDirection,
    pacmanMouth,
    pacmanX,
    pacmanY,
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
    onSetTargetKeyboard: (direction: string) => dispatch(actions.setTargetKeyboard(direction)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
