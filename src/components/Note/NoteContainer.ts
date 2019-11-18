import { connect } from 'react-redux'
import Note, { IProps } from './Note'
import { IStore } from '../../store/root'

type StateProps = Pick<IProps, 'isSimilar' | 'isActive' | 'isInScale' | 'isKey'>;
type OwnProps = Pick<IProps, 'name' | 'octave'>;

const mapStateToProps = (
  { playingNote, selectedScale, isMicActive }: IStore,
  { name, octave }: OwnProps
): StateProps => {
  const
    isSimilar = isMicActive && playingNote && playingNote.name === name,
    isActive = isSimilar && (octave === null ? true : playingNote.octave === octave),
    isInScale = selectedScale.notes.includes(name),
    isKey = selectedScale.key === name

  return { isSimilar, isActive, isInScale, isKey }
}

export default connect(mapStateToProps)(Note)
