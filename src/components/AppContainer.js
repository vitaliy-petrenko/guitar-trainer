import { connect } from 'react-redux';

import App from '../components/App';
import { setPlayingNote } from '../actions/audio';

const mapStateToProps = ({ isMicActive }) => ({ isMicActive });

const mapDispatchToProps = (dispatch) => ({
  setPlayingNote: payload => dispatch(setPlayingNote(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
