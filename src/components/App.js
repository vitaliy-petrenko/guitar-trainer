import React from 'react';
import './App.scss';
import audioService from '../audioCore';
import Guitar from './Guitar/Guitar';
import Piano from './Piano/Piano';
import SidebarContainer from '../containers/SidebarContainer';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';

class App extends React.Component {
  componentDidMount() {
    audioService.on('notesDetected', (notesData = []) => {
      const
        [data] = notesData,
        setter = this.props.actions && this.props.actions.setPlayingNote;

      setter && setter(data);
    });
  }

  render() {
    const
      { guitarStringsStartNotes, pianoStartNote } = this.props;

    return (
      <div className='application'>
        <div className="application__side">
          <ThemeProvider theme={theme}>
            <SidebarContainer/>
          </ThemeProvider>
        </div>

        <div className="application__main">
          <div className="row">
            <div className="board-container">
              <Guitar frets={18} startNotes={guitarStringsStartNotes}/>
            </div>
          </div>
          <div className="row">
            <div className="board-container">
              <Piano octaves={4} startNote={pianoStartNote}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
