import { combineReducers } from 'redux';
import { isMicActive, playingNote, selectedScale } from './audio';
import { guitarStringsStartNotes } from './guitar';
import { pianoStartNote } from './piano';

export default combineReducers({
  playingNote,
  isMicActive,
  guitarStringsStartNotes,
  pianoStartNote,
  selectedScale,
});
