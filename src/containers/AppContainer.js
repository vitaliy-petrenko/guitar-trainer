import { connect } from 'react-redux';

import App from '../components/App';
import * as audioActions from '../actions/audio';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => {
  const {
    playingNote,
    isMicActive,
    guitarStringsStartNotes,
    pianoStartNote,
    selectedScale,
  } = state;

  return {
    playingNote,
    isMicActive,
    guitarStringsStartNotes,
    pianoStartNote,
    selectedScale,
  }
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...audioActions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
