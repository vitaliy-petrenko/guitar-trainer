import { ACTION_TYPES } from '../constants';
import { Note } from '../types';

export const switchMic = (isMicActive: boolean) => ({
  type: ACTION_TYPES.SET_MIC_LISTEN,
  payload: isMicActive,
});

export const setPlayingNote = (note: Note) => ({
  type: ACTION_TYPES.SET_PLAYING_NOTE,
  payload: note,
});

export const selectScale = (scaleName: string) => ({
  type: ACTION_TYPES.SET_SCALE_NAME,
  payload: scaleName,
});

export const selectScaleKey = (scaleKey: string) => ({
  type: ACTION_TYPES.SET_SCALE_KEY,
  payload: scaleKey,
});
