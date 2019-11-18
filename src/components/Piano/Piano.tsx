import React, { ReactElement } from 'react'
import './Piano.scss'
import { NOTES } from '../../constants'
import Note from '../Note/NoteContainer'
import { INote } from '../../types/audio'
import { memoize } from 'decko'

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

class Piano extends React.Component<IProps> {
  @memoize
  getMarkup({ startNote, octaves }: IProps): ReactElement[] {
    const
      keys = [],
      keysCount = 12 * octaves

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

    return keys
  }

  render() {
    const
      { octaves, startNote } = this.props,
      inner = this.getMarkup({ octaves, startNote })

    return (
      <div className="piano">{inner}</div>
    )
  }
}

export default Piano
