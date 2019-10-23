import { INote } from '../../types/audio';
import { IActionBase } from '../../types/common';

export interface ISwitchMic extends IActionBase {
  payload: boolean,
}

export interface ISetPlayingNote extends IActionBase {
  payload: INote,
}

export interface ISelectScale extends IActionBase {
  payload: string,
}

export interface ISelectScaleKey extends IActionBase {
  payload: string,
}
