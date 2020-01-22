interface ISwitchMicAction extends IActionBase {
}

interface ISetPlayingNoteAction extends IActionBase {
  payload: INote,
}

interface ISelectScaleAction extends IActionBase {
  payload: string,
}

interface ISelectScaleKeyAction extends IActionBase {
  payload: string,
}
