import { connect } from 'react-redux';
import { IStoreState } from '../../types/index';
import Gameboard from './Gameboard';

export function mapStateToProps({ cells }: IStoreState) {
  return {
    cells
  }
}

export default connect(mapStateToProps)(Gameboard);