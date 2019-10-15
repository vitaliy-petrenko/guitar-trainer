import { connect } from 'react-redux';

import Sidebar from '../components/Sidebar/Sidebar';
import * as audioActions from '../actions/audio';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => {
  const {
    playingNote,
    isMicActive,
    selectedScaleName,
    selectedScaleKey,
  } = state;

  return {
    playingNote,
    isMicActive,
    selectedScaleName,
    selectedScaleKey
  }
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...audioActions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
