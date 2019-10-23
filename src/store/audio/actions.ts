import { ACTION_TYPES } from '../../constants';
import { INote } from '../../types/audio';
import { ISelectScale, ISelectScaleKey, ISetPlayingNote, ISwitchMic } from './types';

export const switchMic = (isMicActive: boolean): ISwitchMic => ({
  type: ACTION_TYPES.SET_MIC_LISTEN,
  payload: isMicActive,
});

export const setPlayingNote = (note: INote): ISetPlayingNote => ({
  type: ACTION_TYPES.SET_PLAYING_NOTE,
  payload: note,
});

export const selectScale = (scaleName: string): ISelectScale => ({
  type: ACTION_TYPES.SET_SCALE_NAME,
  payload: scaleName,
});

export const selectScaleKey = (scaleKey: string): ISelectScaleKey => ({
  type: ACTION_TYPES.SET_SCALE_KEY,
  payload: scaleKey,
});
