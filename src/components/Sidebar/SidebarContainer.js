import { connect } from 'react-redux';

import Sidebar from './Sidebar';
import * as audioActions from '../../actions/audio';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => {
  const {
    playingNote,
    isMicActive,
    selectedScale,
  } = state;

  return {
    playingNote,
    isMicActive,
    selectedScaleKey: selectedScale.key,
  }
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...audioActions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
