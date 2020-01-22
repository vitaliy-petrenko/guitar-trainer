import { ACTION_TYPES } from '../../constants'
import { createAction } from '@reduxjs/toolkit'

export const switchMic = createAction(ACTION_TYPES.SET_MIC_LISTEN)

export const setPlayingNote = createAction<INote>(ACTION_TYPES.SET_PLAYING_NOTE)

export const selectScale = createAction<string>(ACTION_TYPES.SET_SCALE_NAME)

export const selectScaleKey = createAction<string>(ACTION_TYPES.SET_SCALE_KEY)

