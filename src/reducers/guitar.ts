import { Action, GuitarOpenStrings } from '../types';

const DEFAULT_START_NOTES = [
  { name: 'E', octave: 4 },
  { name: 'B', octave: 3 },
  { name: 'G', octave: 3 },
  { name: 'D', octave: 3 },
  { name: 'A', octave: 2 },
  { name: 'E', octave: 2 },
] as GuitarOpenStrings;

export const guitarOpenStrings =
  (state: GuitarOpenStrings = DEFAULT_START_NOTES, action: Action): GuitarOpenStrings => {
    return state;
  };
