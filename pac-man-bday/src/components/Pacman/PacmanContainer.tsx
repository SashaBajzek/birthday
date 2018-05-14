import { connect, Dispatch } from 'react-redux';
import * as actions from '../../actions/';
import { IStoreState } from '../../types/index';
import Pacman from './Pacman';

export function mapStateToProps({ pacmanDirection, pacmanMouth }: IStoreState) {
  return {
    pacmanDirection,
    pacmanMouth
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

export default connect(mapStateToProps, mapDispatchToProps)(Pacman);
