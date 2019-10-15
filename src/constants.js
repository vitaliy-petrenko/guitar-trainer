export const SCALES = {
  MAJOR: [2, 2, 1, 2, 2, 2, 1],
  HARMONIC_MAJOR: [2, 2, 1, 2, 1, 3, 1],
  MELODIC_MAJOR: [2, 2, 1, 2, 1, 2, 2],
  MAJOR_PENTATONIC: [2, 2, 3, 2, 3],
  MINOR: [2, 1, 2, 2, 1, 2, 2],
  HARMONIC_MINOR: [2, 1, 2, 2, 1, 3, 1],
  MELODIC_MINOR: [2, 1, 2, 2, 2, 2, 1],
  MINOR_PENTATONIC: [3, 2, 2, 3, 2],
  // MIXOLYDIAN: [],
  // LYDIAN: [],
};

export const SCALES_NAMES = Object.keys(SCALES).reduce((res, key) => {
  res[key] = key;
  return res;
}, {});

export const ACTION_TYPES = {
  SET_PLAYING_NOTE: 'SET_PLAYING_NOTE',
  SET_MIC_LISTEN: 'SET_MIC_LISTEN',

  SET_GUITAR_STRING_START_NOTE: 'SET_GUITAR_STRING_START_NOTE',
  SET_PIANO_START_NOTE: 'SET_PIANO_START_NOTE',

  SET_SCALE: 'SET_SCALE',
  SET_SCALE_KEY: 'SET_SCALE_KEY',
};

