import { connect } from 'react-redux';
import { IStoreState } from '../../types/index';
import Cell from './Cell';

export function mapStateToProps({ pacmanX, pacmanY }: IStoreState) {
  return {
    pacmanX,
    pacmanY
  }
}

export default connect(mapStateToProps)(Cell);