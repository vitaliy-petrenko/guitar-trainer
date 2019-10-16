import React from 'react';
import './Note.scss';

export default ({ name = 'C#', octave = 1, isSimilar = false, isActive = true, isInScale = true, isKey = false }) => {
  const
    classNames = ['note', `note--${name[0].toLowerCase()}`],
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
  )
};
