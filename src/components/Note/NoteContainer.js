import { connect } from 'react-redux';
import Note from './Note';

const mapStateToProps = ({ playingNote, selectedScale, isMicActive }, { name, octave }) => {
  const
    isSimilar = isMicActive && playingNote && playingNote.name === name,
    isActive = isSimilar && playingNote.octave === octave,
    isInScale = selectedScale.scale.includes(name);

  return { isSimilar, isActive, isInScale };
};


export default connect(mapStateToProps)(Note);
