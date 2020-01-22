import { connect } from 'react-redux'
import Sidebar, { IProps } from './Sidebar'
import { IStore } from '../../store/root'

type StateProps = Pick<IProps, 'isMicActive' | 'playingNote'>;

const mapStateToProps = (
  { isMicActive, playingNote }: IStore
): StateProps => ({
  isMicActive,
  playingNote,
})

export default connect(mapStateToProps)(Sidebar)
