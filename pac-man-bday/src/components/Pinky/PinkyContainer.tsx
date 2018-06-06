import { connect } from 'react-redux';
import { IStoreState } from '../../types/index';
import Pinky from './Pinky';

export function mapStateToProps({ pinkyDirection }: IStoreState) {
  return {
    pinkyDirection
  }
}

export default connect(mapStateToProps, null)(Pinky);
