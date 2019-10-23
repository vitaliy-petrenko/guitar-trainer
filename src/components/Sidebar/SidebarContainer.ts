import { connect } from 'react-redux';
import Sidebar, { IProps } from './Sidebar';
import { selectScale, selectScaleKey, switchMic } from '../../actions/audio';
import { Dispatch } from 'redux';
import { IStore } from '../../types';

type StateProps = Pick<IProps, 'isMicActive' | 'selectedScale' | 'playingNote'>;
type DispatchProps = Pick<IProps, 'onSelectKey' | 'onSelectScale' | 'switchMic'>

const mapStateToProps = (
  { isMicActive, selectedScale, playingNote }: IStore
): StateProps => ({
  isMicActive,
  selectedScale,
  playingNote,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onSelectKey: (key: string) => dispatch(selectScaleKey(key)),
  onSelectScale: (scale: string) => dispatch(selectScale(scale)),
  switchMic: (isMicActive: boolean) => dispatch(switchMic(isMicActive))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
