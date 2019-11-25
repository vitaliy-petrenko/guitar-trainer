import { combineReducers } from 'redux'
import { guitarOpenStrings, isMicActive, pianoStartNote, playingNote, selectedScale } from './audio/reducers'

export interface IStore {
  playingNote: IPlayingNote,
  isMicActive: boolean,
  guitarOpenStrings: TGuitarOpenStrings,
  pianoStartNote: INote,
  selectedScale: ISelectedScale
}

export default combineReducers({
  playingNote,
  isMicActive,
  guitarOpenStrings,
  pianoStartNote,
  selectedScale,
})
