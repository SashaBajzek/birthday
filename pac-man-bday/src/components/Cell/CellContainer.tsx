import { connect, Dispatch } from 'react-redux';
import * as actions from '../../actions/';
import { IStoreState } from '../../types/index';
import Cell from './Cell';

export function mapStateToProps({ pacmanX, pacmanY, targetX, targetY }: IStoreState) {
  return {
    pacmanX,
    pacmanY,
    targetX,
    targetY
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.MovePacmanAction>) {
  return {
    onSetTarget: (newX: number, newY: number) => dispatch(actions.setTarget(newX, newY))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
