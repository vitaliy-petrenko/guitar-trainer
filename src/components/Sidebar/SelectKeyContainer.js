import { connect } from 'react-redux';
import SelectKey from './SelectKey';
import { selectScaleKey } from '../../actions/audio';

const mapStateToProps = ({ selectedScale }) => ({ selectedScale });

const mapDispatchToProps = (dispatch) => ({
  onSelect: payload => dispatch(selectScaleKey(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectKey);
