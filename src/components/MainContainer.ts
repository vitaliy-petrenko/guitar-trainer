import { connect } from 'react-redux'
import Main, { IProps } from './Main'
import { IStore } from '../store/root'

type StateProps = IProps;

const mapStateToProps = (
  { guitarOpenStrings, pianoStartNote, selectedScale }: IStore
): StateProps => {
  return { guitarOpenStrings, pianoStartNote, selectedScale }
}

export default connect(mapStateToProps)(Main)
