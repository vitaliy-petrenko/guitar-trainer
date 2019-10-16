import { connect } from 'react-redux';
import Note from './Note';

const mapStateToProps = ({ playingNote, selectedScale, isMicActive }, { name, octave }) => {
  const
    isSimilar = isMicActive && playingNote && playingNote.name === name,
    isActive = isSimilar && (octave === null ? true : playingNote.octave === octave),
    isInScale = selectedScale.scale.includes(name),
    isKey = selectedScale.key === name;

  return { isSimilar, isActive, isInScale, isKey };
};


export default connect(mapStateToProps)(Note);
