import React from 'react';
import './Piano.scss';
import { NOTES } from '../../constants';
import Note from '../Note/NoteContainer';
import { INote } from '../../types/audio';

const Key: React.FC<INote> = ({ name, octave }) => {
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
  );
};

interface IProps {
  octaves: number,
  startNote: INote,
}

const Piano: React.FC<IProps> = ({ octaves = 3, startNote }) => {
  const
    keys = [],
    keysCount = 12 * octaves;

  for (let i = 0, octave = 0, note = { ...startNote }; i < keysCount; i++) {
    const
      noteIndex = NOTES.indexOf(note.name);

    octave = note.octave ? note.octave : octave;

    keys.push(<Key key={i} name={note.name} octave={octaves === 1 ? null : octave}/>);

    if (!~noteIndex) continue;

    const newNoteIndex = (noteIndex + 1) % NOTES.length;

    if (newNoteIndex === 0) octave++;
    note.name = NOTES[newNoteIndex];
  }

  return <div className="piano">{keys}</div>;
};


export default Piano;
