import React, { ReactElement } from 'react'
import './Guitar.scss'
import Note from '../Note/NoteContainer'
import { NOTES } from '../../constants'
import { INote, TGuitarOpenStrings } from '../../types/audio'

interface ICell {
  note: INote,
}

const Cell: React.FC<ICell> = ({ note }) => (
  <div className='guitar__cell'>
    <div className="guitar__note">
      <Note {...note}/>
    </div>
  </div>
)

const Zero: React.FC<ICell> = ({ note }) => (
  <div className="guitar__zero">
    <div className="guitar__note">
      <Note {...note}/>
    </div>
  </div>
)

interface IProps {
  frets: number,
  startNotes: TGuitarOpenStrings
}

const getMarkup = (() => {
  const
    cache = new Map(),
    getCacheKey = ({ frets, startNotes }: IProps): string =>
      `${frets}.${startNotes.map(({ name, octave }) => name + octave).join('.')}`

  return ({ frets, startNotes }: IProps): ReactElement[] => {
    const
      cacheKey = getCacheKey({ frets, startNotes }),
      inCache = cache.get(cacheKey),
      strings = []

    if (inCache) return inCache

    for (let i = 0; i < 6; i++) {
      const
        cells = [],
        startNote = startNotes[i],
        startNoteIndex = NOTES.indexOf(startNote.name),
        fretsWithZero = frets + 1

      let octave = startNote.octave || 0

      for (let j = 0; j < fretsWithZero; j++) {
        const newNoteIndex = (j + startNoteIndex) % NOTES.length

        const
          note = {
            name: NOTES[newNoteIndex],
            octave: newNoteIndex === 0 ? ++octave : octave,
          }

        if (j === 0) {
          cells.push(<Zero note={note} key={j}/>)
        } else {
          cells.push(<Cell note={note} key={j}/>)
        }
      }

      strings.push(<div key={i} className='guitar__string'>{cells}</div>)
    }

    cache.set(cacheKey, strings)

    return strings
  }
})()

export const Guitar: React.FC<IProps> = ({ frets, startNotes }) => (
  <div className="guitar">
    {getMarkup({ frets, startNotes })}
  </div>
)

export default Guitar
