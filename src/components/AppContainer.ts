import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import App, { IProps } from './App'
import { setPlayingNote } from '../store/audio/actions'
import { IStore } from '../store/root'

type StateProps = Pick<IProps, 'isMicActive'>;
type DispatchProps = Pick<IProps, 'setPlayingNote'>

const mapStateToProps = (
  { isMicActive }: IStore
): StateProps => ({ isMicActive })

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  setPlayingNote: (note: INote) => dispatch(setPlayingNote(note)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
