import { connect, Dispatch } from 'react-redux';
import * as actions from '../../actions/';
import { IStoreState } from '../../types/index';
import PacmanMoves from './PacmanMoves';

export function mapStateToProps({ pacmanX, pacmanY }: IStoreState) {
  return {
    pacmanX,
    pacmanY
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.MovePacmanAction>) {
  return {
    onMovePacmanDown: () => dispatch(actions.movePacmanDown()),
    onMovePacmanLeft: () => dispatch(actions.movePacmanLeft()),
    onMovePacmanRight: () => dispatch(actions.movePacmanRight()),
    onMovePacmanUp: () => dispatch(actions.movePacmanUp())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PacmanMoves);