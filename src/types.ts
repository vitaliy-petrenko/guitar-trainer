export type ScalesIntervals = {
  [key: string]: Array<number>,
}

export type ScaleNotes = Array<string>;

export type ScalesTranslations = {
  [key: string]: string,
}

export type ScaleKeys = {
  [key: string]: string,
}

export type Action = {
  type: string,
  payload: any,
}

export type Note = {
  name: string,
  octave?: number | null,
}

export interface PlayingNote extends Note {
  value: number,
  cents: number,
  frequency: number,
}

export type GuitarOpenStrings = Array<Note>;

export type SelectedScale = {
  name: string,
  key: string,
  notes: ScaleNotes,
}

export interface IStore {
  playingNote: PlayingNote,
  isMicActive: boolean,
  guitarOpenStrings: GuitarOpenStrings,
  pianoStartNote: Note,
  selectedScale: SelectedScale
}
