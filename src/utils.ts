import { NOTES, SCALES } from './constants'

export const generateScaleNotes = (scaleName: string, scaleKey: string): TScaleNotes => {
  const
    pattern = SCALES[scaleName],
    scale = [scaleKey]

  for (let i = 1; i < pattern.length; i++) {
    const nextNoteIndex = (NOTES.indexOf(scale[i - 1]) + pattern[i - 1]) % NOTES.length
    scale.push(NOTES[nextNoteIndex])
  }

  return scale
}
