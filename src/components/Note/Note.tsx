import React from 'react';
import './Note.scss';
import { Note as NoteType } from '../../types';

export interface IProps extends NoteType {
  isActive?: boolean,
  isSimilar?: boolean,
  isInScale?: boolean,
  isKey?: boolean,
}

const Note: React.FC<IProps> = ({ name, octave, isSimilar = false, isActive = true, isInScale = true, isKey = false }) => {
  const
    classNames = ['note', `note--${name[0].toLowerCase()}${name[1] === '#' ? '-diez' : ''}`],
    string = `${name}${octave ? octave : ''}`;

  if (isSimilar) {
    classNames.push('is-similar');
  }

  if (isActive) {
    classNames.push('is-active');
  }

  if (!isInScale) {
    classNames.push('is-disabled');
  }

  if (isKey) {
    classNames.push('is-key');
  }

  return (
    <div className={classNames.join(' ')}>{string}</div>
  );
};


export default Note;
