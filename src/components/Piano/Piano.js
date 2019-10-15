import React from 'react';
import './Piano.scss';
import { NOTES } from '../../audioCore';
import Note from '../Note/NoteContainer';

const Key = ({ name = 'C#', octave = 2 }) => {
  const note = {
    name,
    octave,
  };

  return (
    <div className="piano__key">
      <div className="piano__note">
        <Note {...note}/>
      </div>
    </div>
  )
};

export default ({ octaves = 3, startNote }) => {
  const
    keys = [],
    keysCount = 12 * octaves;

  for (let i = 0, note = { ...startNote }; i < keysCount; i++) {
    const noteIndex = NOTES.indexOf(note.name);

    keys.push(<Key key={i} name={note.name} octave={note.octave}/>);

    if (!~noteIndex) continue;

    const newNoteIndex = (noteIndex + 1) % NOTES.length;

    if (newNoteIndex === 0) note.octave++;
    note.name = NOTES[newNoteIndex];
  }

  return <div className="piano">{keys}</div>;
};
