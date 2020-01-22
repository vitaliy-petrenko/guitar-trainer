import { ACTION_TYPES, NOTES, SCALES_KEYS } from '../../constants'
import { generateScaleNotes } from '../../utils'

const INITIAL_STATE = {
  playingNote: {
    name: 'C', octave: 3, cents: 0
  },
  isMicActive: false,

  scale: {
    name: SCALES_KEYS.MAJOR,
    key: NOTES[0],
    notes: generateScaleNotes(SCALES_KEYS.MAJOR, NOTES[0])
  },

  pianoStartNote: { name: 'C', octave: 2 },

  guitarOpenStrings: [
    { name: 'E', octave: 4 },
    { name: 'B', octave: 3 },
    { name: 'G', octave: 3 },
    { name: 'D', octave: 3 },
    { name: 'A', octave: 2 },
    { name: 'E', octave: 2 },
  ]
}

export const playingNote =
  (state: INote = INITIAL_STATE.playingNote, action: ISetPlayingNoteAction) => {
    if (action.type === ACTION_TYPES.SET_PLAYING_NOTE) {
      return action.payload
    }

    return state
  }

export const isMicActive =
  (state: boolean = INITIAL_STATE.isMicActive, action: ISwitchMicAction) => {
    if (action.type === ACTION_TYPES.SET_MIC_LISTEN) {
      return !state
    }

    return state
  }

export const selectedScale =
  (state: ISelectedScale = { ...INITIAL_STATE.scale }, action: ISelectScaleAction | ISelectScaleKeyAction): ISelectedScale => {
    switch (action.type) {

      case ACTION_TYPES.SET_SCALE_NAME: {
        const
          { key } = state,
          newName = action.payload

        return {
          key,
          name: newName,
          notes: generateScaleNotes(newName, key)
        }
      }

      case ACTION_TYPES.SET_SCALE_KEY: {
        const
          { name } = state,
          newKey = action.payload

        return {
          key: newKey,
          name,
          notes: generateScaleNotes(name, newKey)
        }
      }

      default:
        return state
    }
  }

export const pianoStartNote = (state: INote = INITIAL_STATE.pianoStartNote): INote => {
  return state
}

export const guitarOpenStrings = (state: TGuitarOpenStrings = INITIAL_STATE.guitarOpenStrings): TGuitarOpenStrings => {
  return state
}
