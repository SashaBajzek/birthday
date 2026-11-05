import { connect } from 'react-redux';
import { IStoreState } from '../../types/index';
import Scoreboard from './Scoreboard';

export function mapStateToProps({ score }: IStoreState) {
  return {
    score
  }
}

export default connect(mapStateToProps, null)(Scoreboard);