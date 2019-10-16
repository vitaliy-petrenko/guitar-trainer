import { ACTION_TYPES, NOTES, SCALES_KEYS } from '../constants';
import { generateScale } from '../audioCore';

const DEFAULT_DATA = {
  playingNote: {
    name: 'C', octave: 3, cents: 0
  },
  isMicActive: false,

  scale: {
    name: SCALES_KEYS.MAJOR,
    key: NOTES[0],
  },
};

DEFAULT_DATA.scale.scale = generateScale(DEFAULT_DATA.scale.name, DEFAULT_DATA.scale.key);

export const playingNote = (state = DEFAULT_DATA.playingNote, action) => {
  if (action.type === ACTION_TYPES.SET_PLAYING_NOTE) {
    return action.payload;
  }

  return state;
};

export const isMicActive = (state = DEFAULT_DATA.isMicActive, action) => {
  if (action.type === ACTION_TYPES.SET_MIC_LISTEN) {
    return action.payload;
  }

  return state;
};

export const selectedScale = (state = { ...DEFAULT_DATA.scale }, action) => {
  switch (action.type) {

    case ACTION_TYPES.SET_SCALE: {
      const
        { key } = state,
        newName = action.payload;

      return {
        key,
        name: newName,
        scale: generateScale(newName, key)
      };
    }

    case ACTION_TYPES.SET_SCALE_KEY: {
      const
        { name } = state,
        newKey = action.payload;

      return {
        key: newKey,
        name,
        scale: generateScale(name, newKey)
      };
    }

    default:
      return state;
  }
};
