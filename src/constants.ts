import { ScaleKeys, ScalesIntervals, ScalesTranslations } from './types';

export const NOTES: Array<string> = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

export const DIATONIC_SCALES = {
  MAJOR: {
    LYDIAN: [2, 2, 2, 1, 2, 2, 1],
    MAJOR: [2, 2, 1, 2, 2, 2, 1],
    MIXOLYDIAN: [2, 2, 1, 2, 2, 1, 2],
    DORIAN: [2, 1, 2, 2, 2, 1, 2],
  },

  MINOR: {
    MINOR: [2, 1, 2, 2, 1, 2, 2],
    PHRIGIAN: [1, 2, 2, 2, 1, 2, 2],
    LOCRIAN: [1, 2, 2, 1, 2, 2, 2],
  },
};

export const SCALES = {
  SHOW_ALL: Array(12).fill(1),

  ...DIATONIC_SCALES.MAJOR,
  ...DIATONIC_SCALES.MINOR,

  HARMONIC_MAJOR: [2, 2, 1, 2, 1, 3, 1],
  MELODIC_MAJOR: [2, 2, 1, 2, 1, 2, 2],
  MAJOR_PENTATONIC: [2, 2, 3, 2, 3],
  MAJOR_BLUES: [2, 1, 1, 3, 2, 3],

  HARMONIC_MINOR: [2, 1, 2, 2, 1, 3, 1],
  MELODIC_MINOR: [2, 1, 2, 2, 2, 2, 1],
  MINOR_PENTATONIC: [3, 2, 2, 3, 2],
  MINOR_BLUES: [3, 2, 1, 1, 3, 2],
} as ScalesIntervals;

export const SCALES_KEYS = Object.keys(SCALES).reduce((res, key) => {
  res[key] = key;

  return res;
}, {} as ScaleKeys);

const CUSTOM_SCALES_NAMES = {
  MAJOR: 'Major/Ionian',
  MINOR: 'Minor/Aeolian',
} as ScalesTranslations;

export const SCALES_NAMES = Object.keys(SCALES).reduce((res, key) => {
  res[key] = CUSTOM_SCALES_NAMES[key] ? CUSTOM_SCALES_NAMES[key] : key
    .split('_')
    .map(sub => sub[0].toUpperCase() + sub.slice(1).toLowerCase())
    .join(' ');

  return res;
}, {} as ScalesTranslations);

export const ACTION_TYPES = {
  SET_PLAYING_NOTE: 'SET_PLAYING_NOTE',
  SET_MIC_LISTEN: 'SET_MIC_LISTEN',

  SET_GUITAR_STRING_START_NOTE: 'SET_GUITAR_STRING_START_NOTE',
  SET_PIANO_START_NOTE: 'SET_PIANO_START_NOTE',

  SET_SCALE_NAME: 'SET_SCALE_NAME',
  SET_SCALE_KEY: 'SET_SCALE_KEY',
};

