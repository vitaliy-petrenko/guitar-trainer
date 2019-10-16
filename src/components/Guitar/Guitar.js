import React from 'react';
import './Guitar.scss';
import Note from '../Note/NoteContainer';
import { NOTES } from '../../constants';

const String = ({ children }) => <div className='guitar__string'>{children}</div>;

const Cell = ({ note }) => (
  <div className='guitar__cell'>
    <div className="guitar__note">
      <Note {...note}/>
    </div>
  </div>
);

const Zero = ({ note }) => (
  <div className="guitar__zero">
    <div className="guitar__note">
      <Note {...note}/>
    </div>
  </div>
);

export default ({ frets, startNotes }) => {
  const strings = [];

  for (let i = 0; i < 6; i++) {
    const
      cells = [],
      startNote = startNotes[i],
      startNoteIndex = NOTES.indexOf(startNote.name),
      fretsWithZero = frets + 1;

    let octave = startNote.octave;

    for (let j = 0; j < fretsWithZero; j++) {
      const newNoteIndex = (j + startNoteIndex) % NOTES.length;

      const
        note = {
          name: NOTES[newNoteIndex],
          octave: newNoteIndex === 0 ? ++octave : octave,
        };

      if (j === 0) {
        cells.push(<Zero note={note} key={j}/>);
      } else {
        cells.push(<Cell note={note} key={j}/>);
      }
    }

    strings.push(<String key={i}>{cells}</String>);
  }

  return (
    <div className="guitar">
      {strings}
    </div>
  )
}
