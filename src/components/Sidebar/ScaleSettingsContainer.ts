import { connect } from 'react-redux';
import { selectScale, selectScaleKey } from '../../actions/audio';
import { Dispatch } from 'redux';
import { IStore } from '../../types';
import ScaleSettings, { IProps } from './ScaleSettings';

type StateProps = Pick<IProps, 'selectedScale'>;
type DispatchProps = Pick<IProps, 'onSelectKey' | 'onSelectScale'>

const mapStateToProps = (
  { selectedScale }: IStore
): StateProps => ({
  selectedScale,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onSelectKey: (key: string) => dispatch(selectScaleKey(key)),
  onSelectScale: (scale: string) => dispatch(selectScale(scale)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ScaleSettings);
