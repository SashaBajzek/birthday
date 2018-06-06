import { connect } from 'react-redux';
import { IStoreState } from '../../types/index';
import Blinky from './Blinky';

export function mapStateToProps({ blinkyDirection }: IStoreState) {
  return {
    blinkyDirection
  }
}

export default connect(mapStateToProps, null)(Blinky);
