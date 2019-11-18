import React, { ReactElement } from 'react'
import './Piano.scss'
import { NOTES } from '../../constants'
import Note from '../Note/NoteContainer'
import { INote } from '../../types/audio'

const Key: React.FC<INote> = ({ name, octave }) => {
  const note = {
    name,
    octave,
  }

  return (
    <div className="piano__key" data-name={name}>
      <div className="piano__note">
        <Note {...note}/>
      </div>
    </div>
  )
}

interface IProps {
  octaves: number,
  startNote: INote,
}

const getMarkup = (() => {
  const
    cache = new Map(),
    getCacheKey = ({ startNote, octaves }: IProps): string =>
      `${octaves}.${startNote.name}.${startNote.octave}`

  return ({ startNote, octaves }: IProps): ReactElement[] => {
    const
      cacheKey = getCacheKey({ startNote, octaves }),
      inCache = cache.get(cacheKey),
      keys = [],
      keysCount = 12 * octaves

    if (inCache) return inCache

    let octave = startNote.octave || 2

    for (let i = 0, note = { ...startNote }; i < keysCount; i++) {
      const
        noteIndex = NOTES.indexOf(note.name)

      keys.push(<Key key={i} name={note.name} octave={octaves === 1 ? null : octave}/>)

      if (!~noteIndex) continue

      const newNoteIndex = (noteIndex + 1) % NOTES.length

      if (newNoteIndex === 0) octave++
      note.name = NOTES[newNoteIndex]
    }

    cache.set(cacheKey, keys)

    return keys
  }
})()

export const Piano: React.FC<IProps> = ({ octaves, startNote }) => (
  <div className="piano">{getMarkup({ octaves, startNote })}</div>
)

export default Piano
