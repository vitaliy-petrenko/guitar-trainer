import Guitar from './Guitar/Guitar';
import Piano from './Piano/Piano';
import React from 'react';
import { GuitarOpenStrings, Note, SelectedScale } from '../types';

export interface IProps {
  guitarOpenStrings: GuitarOpenStrings,
  pianoStartNote: Note,
  selectedScale: SelectedScale,
}

const Main: React.FC<IProps> = ({ guitarOpenStrings, pianoStartNote, selectedScale }) => (
  <div className="application__main">
    <div className="board-container">
      <Guitar frets={18} startNotes={guitarOpenStrings}/>
    </div>
    <div className="board-container">
      <Piano octaves={4} startNote={pianoStartNote}/>
    </div>
  </div>
);

export default Main;
