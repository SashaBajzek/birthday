import { connect } from 'react-redux';
import { IStoreState } from '../../types/index';
import Clyde from './Clyde';

export function mapStateToProps({ clydeDirection }: IStoreState) {
  return {
    clydeDirection
  }
}

export default connect(mapStateToProps, null)(Clyde);
