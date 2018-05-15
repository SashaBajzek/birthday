import { connect } from 'react-redux';
import { IStoreState } from '../../types/index';
import Pacman from './Pacman';

export function mapStateToProps({ pacmanDirection, pacmanMouth }: IStoreState) {
  return {
    pacmanDirection,
    pacmanMouth
  }
}

export default connect(mapStateToProps, null)(Pacman);
