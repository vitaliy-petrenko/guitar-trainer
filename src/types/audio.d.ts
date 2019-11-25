interface IScalesIntervals {
  [key: string]: number[]
}

type TScaleNotes = string[]

interface IScalesTranslations {
  [key: string]: string
}

interface IScaleKeys {
  [key: string]: string
}

interface INote {
  name: string
  octave?: number | nulls
}

interface IPlayingNote extends INote {
  value: number
  cents: number
  frequency: number
}

type TGuitarOpenStrings = INote[]

interface ISelectedScale {
  name: string
  key: string
  notes: TScaleNotes
}
