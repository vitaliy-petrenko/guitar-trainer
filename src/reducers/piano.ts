import { Note } from '../types';

const DEFAULT_START_NOTE: Note = { name: 'C', octave: 2 };

export const pianoStartNote = (state: Note = DEFAULT_START_NOTE, action: string): Note => {
  return state;
};
