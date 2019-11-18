import { ACTION_TYPES } from '../../constants'
import { INote } from '../../types/audio'
import { ISelectScaleAction, ISelectScaleKeyAction, ISetPlayingNoteAction, ISwitchMicAction } from './types'

export const switchMic = (isMicActive: boolean): ISwitchMicAction => ({
  type: ACTION_TYPES.SET_MIC_LISTEN,
  payload: isMicActive,
})

export const setPlayingNote = (note: INote): ISetPlayingNoteAction => ({
  type: ACTION_TYPES.SET_PLAYING_NOTE,
  payload: note,
})

export const selectScale = (scaleName: string): ISelectScaleAction => ({
  type: ACTION_TYPES.SET_SCALE_NAME,
  payload: scaleName,
})

export const selectScaleKey = (scaleKey: string): ISelectScaleKeyAction => ({
  type: ACTION_TYPES.SET_SCALE_KEY,
  payload: scaleKey,
})
