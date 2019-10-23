import { INote } from '../../types/audio';
import { IActionBase } from '../../types/common';

export interface ISwitchMicAction extends IActionBase {
  payload: boolean,
}

export interface ISetPlayingNoteAction extends IActionBase {
  payload: INote,
}

export interface ISelectScaleAction extends IActionBase {
  payload: string,
}

export interface ISelectScaleKeyAction extends IActionBase {
  payload: string,
}
