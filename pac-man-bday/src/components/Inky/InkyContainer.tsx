import { connect } from 'react-redux';
import { IStoreState } from '../../types/index';
import Inky from './Inky';

export function mapStateToProps({ inkyDirection }: IStoreState) {
  return {
    inkyDirection
  }
}

export default connect(mapStateToProps, null)(Inky);
