import { ACTION_TYPES, NOTES, SCALES_KEYS } from '../constants';
import { generateScaleNotes } from '../utils';
import { Action, Note, SelectedScale } from '../types';

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
};

export const playingNote =
  (state: Note = INITIAL_STATE.playingNote, action: Action) => {
    if (action.type === ACTION_TYPES.SET_PLAYING_NOTE) {
      return action.payload;
    }

    return state;
  };

export const isMicActive =
  (state: boolean = INITIAL_STATE.isMicActive, action: Action) => {
    if (action.type === ACTION_TYPES.SET_MIC_LISTEN) {
      return action.payload;
    }

    return state;
  };

export const selectedScale =
  (state: SelectedScale = { ...INITIAL_STATE.scale }, action: Action): SelectedScale => {
    switch (action.type) {

      case ACTION_TYPES.SET_SCALE_NAME: {
        const
          { key } = state,
          newName = action.payload;

        return {
          key,
          name: newName,
          notes: generateScaleNotes(newName, key)
        };
      }

      case ACTION_TYPES.SET_SCALE_KEY: {
        const
          { name } = state,
          newKey = action.payload;

        return {
          key: newKey,
          name,
          notes: generateScaleNotes(name, newKey)
        };
      }

      default:
        return state;
    }
  };
