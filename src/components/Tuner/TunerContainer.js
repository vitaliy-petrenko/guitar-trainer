import { connect } from 'react-redux';
import Tuner from './Tuner';

const mapStateToProps = state => {
  const {
    playingNote,
  } = state;

  return {
    playingNote,
  }
};


export default connect(mapStateToProps)(Tuner);
