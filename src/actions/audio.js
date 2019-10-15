import { ACTION_TYPES } from '../constants';

export const switchMic = payload => ({
  type: ACTION_TYPES.SET_MIC_LISTEN,
  payload,
});

export const setPlayingNote = payload => ({
  type: ACTION_TYPES.SET_PLAYING_NOTE,
  payload,
});

export const selectScale = payload => ({
  type: ACTION_TYPES.SET_SCALE,
  payload,
});

export const selectScaleKey = payload => ({
  type: ACTION_TYPES.SET_SCALE_KEY,
  payload,
});
