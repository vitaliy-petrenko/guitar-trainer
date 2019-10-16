import { connect } from 'react-redux';
import Main from '../components/Main';
const mapStateToProps = ({ guitarStringsStartNotes, pianoStartNote }) => ({ guitarStringsStartNotes, pianoStartNote });

export default connect(mapStateToProps)(Main);
