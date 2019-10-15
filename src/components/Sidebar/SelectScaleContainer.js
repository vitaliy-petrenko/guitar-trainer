import { connect } from 'react-redux';
import SelectScale from './SelectScale';
import { selectScale } from '../../actions/audio';

const mapStateToProps = ({ selectedScale }) => ({ selectedScale });

const mapDispatchToProps = (dispatch) => ({
  onSelect: payload => dispatch(selectScale(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectScale);
