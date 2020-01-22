import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import StartRecording, { IProps } from './StartRecording'
import { switchMic } from '../../store/audio/actions'

type DispatchProps = Pick<IProps, 'init'>

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  init: () => {
    dispatch(switchMic())
  }
})

export default connect(null, mapDispatchToProps)(StartRecording)
