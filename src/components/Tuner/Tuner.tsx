import React from 'react';
import './Tuner.scss';
import Note from '../Note/Note';
import { PlayingNote as PlayingNoteType } from '../../types';

const REASONABLE_DELTA = 10;

interface TunerArrow {
  isActive: boolean
}

const Arrow: React.FC<TunerArrow> = ({ isActive }) => {
  const classNames = ['tuner__arrow'];

  if (isActive) {
    classNames.push('is-active');
  }

  return (
    <div className={classNames.join(' ')}/>
  );
};

interface IProps {
  playingNote: PlayingNoteType
}

const Tuner: React.FC<IProps> = ({ playingNote }) => {
  return (
    <div className='tuner'>
      <div className="tuner__col">
        <Arrow isActive={playingNote.cents < -REASONABLE_DELTA}/>
      </div>
      <div className="tuner__col tuner__note">
        <Note
          isActive={playingNote.cents >= -REASONABLE_DELTA && playingNote.cents <= REASONABLE_DELTA}
          name={playingNote.name}
          octave={playingNote.octave}
        />
      </div>
      <div className="tuner__col">
        <Arrow isActive={playingNote.cents > REASONABLE_DELTA}/>
      </div>
    </div>
  );
};

export default Tuner;
