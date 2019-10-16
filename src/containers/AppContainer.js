import { connect } from 'react-redux';

import App from '../components/App';
import { setPlayingNote } from '../actions/audio';

const mapDispatchToProps = (dispatch) => ({
  setPlayingNote: payload => dispatch(setPlayingNote(payload)),
});

export default connect(null, mapDispatchToProps)(App);
