import { connect } from 'react-redux';
import Sidebar, { IProps } from './Sidebar';
import { switchMic } from '../../actions/audio';
import { Dispatch } from 'redux';
import { IStore } from '../../types';

type StateProps = Pick<IProps, 'isMicActive' | 'playingNote'>;
type DispatchProps = Pick<IProps, 'switchMic'>

const mapStateToProps = (
  { isMicActive, playingNote }: IStore
): StateProps => ({
  isMicActive,
  playingNote,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  switchMic: (isMicActive: boolean) => dispatch(switchMic(isMicActive))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
