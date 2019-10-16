export const NOTES = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'];

export const SCALES = {
  ALL: Array(12).fill(1),
  MAJOR: [2, 2, 1, 2, 2, 2, 1],
  HARMONIC_MAJOR: [2, 2, 1, 2, 1, 3, 1],
  MELODIC_MAJOR: [2, 2, 1, 2, 1, 2, 2],
  MAJOR_PENTATONIC: [2, 2, 3, 2, 3],
  MAJOR_BLUES: [2, 1, 1, 3, 2, 3],
  MINOR: [2, 1, 2, 2, 1, 2, 2],
  HARMONIC_MINOR: [2, 1, 2, 2, 1, 3, 1],
  MELODIC_MINOR: [2, 1, 2, 2, 2, 2, 1],
  MINOR_PENTATONIC: [3, 2, 2, 3, 2],
  MINOR_BLUES: [3, 2, 1, 1, 3, 2],
  MIXOLYDIAN: [2, 2, 1, 2, 2, 1, 2],
  IONIAN: [2, 2, 1, 2, 2, 2, 1],
  DORIAN: [2, 1, 2, 2, 2, 1, 2],
  PHRIGIAN: [1, 2, 2, 2, 1, 2, 2],
  LYDIAN: [2, 2, 2, 1, 2, 2, 1],
  AEOLIAN: [2, 1, 2, 2, 1, 2, 2],
  LOCRIAN: [1, 2, 2, 1, 2, 2, 2],
};

export const SCALES_KEYS = Object.keys(SCALES).reduce((res, key) => {
  res[key] = key;
  return res;
}, {});

export const SCALES_NAMES = Object.keys(SCALES).reduce((res, key) => {
  res[key] = key
    .split('_')
    .map(sub => sub[0].toUpperCase() + sub.slice(1).toLowerCase())
    .join(' ');

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

