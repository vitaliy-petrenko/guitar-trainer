import { combineReducers } from 'redux';
import { isMicActive, playingNote, selectedScale } from './audio';
import { guitarOpenStrings } from './guitar';
import { pianoStartNote } from './piano';

export default combineReducers({
  playingNote,
  isMicActive,
  guitarOpenStrings,
  pianoStartNote,
  selectedScale,
});
