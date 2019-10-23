export interface IScalesIntervals {
  [key: string]: number[],
}

export type TScaleNotes = string[];

export interface IScalesTranslations {
  [key: string]: string,
}

export interface IScaleKeys {
  [key: string]: string,
}

export interface INote {
  name: string,
  octave?: number | null,
}

export interface IPlayingNote extends INote {
  value: number,
  cents: number,
  frequency: number,
}

export type TGuitarOpenStrings = INote[];

export interface ISelectedScale {
  name: string,
  key: string,
  notes: TScaleNotes,
}
