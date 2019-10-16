import Guitar from './Guitar/Guitar';
import Piano from './Piano/Piano';
import React from 'react';

export default ({ guitarStringsStartNotes, pianoStartNote }) => (
  <div className="application__main">
    <div className="board-container">
      <Guitar frets={18} startNotes={guitarStringsStartNotes}/>
    </div>
    <div className="board-container">
      <Piano octaves={4} startNote={pianoStartNote}/>
    </div>
  </div>
);
