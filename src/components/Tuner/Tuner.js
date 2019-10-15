import React from 'react';
import './Tuner.scss';
import Note from '../Note/Note'

const REASONABLE_DELTA = 10;

const Arrow = ({ isActive }) => {
  const classNames = ['tuner__arrow'];

  if (isActive) {
    classNames.push('is-active');
  }

  return (
    <div className={classNames.join(' ')}/>
  )
};

export default ({ playingNote }) => {
  return (
    <div className='tuner'>
      <div className="tuner__col">
        <Arrow isActive={playingNote.cents < -REASONABLE_DELTA}/>
      </div>
      <div className="tuner__col tuner__note">
        <Note
          isActive={playingNote.cents >= -REASONABLE_DELTA && playingNote.cents <= REASONABLE_DELTA}
          name={playingNote.name} note={playingNote}
          octave={playingNote.octave}
        />
      </div>
      <div className="tuner__col">
        <Arrow isActive={playingNote.cents > REASONABLE_DELTA}/>
      </div>
    </div>
  )
};
