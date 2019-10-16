import React from 'react';
import './App.scss';
import audioService from '../audioCore';
import Guitar from './Guitar/Guitar';
import Piano from './Piano/Piano';
import SidebarContainer from '../containers/SidebarContainer';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';
import Layout from './Layout';

export default class App extends React.Component {
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
      { guitarStringsStartNotes, pianoStartNote } = this.props,
      Sidebar = () => (
        <SidebarContainer/>
      ),
      Main = () => (
        <div className="application__main">
          <div className="board-container">
            <Guitar frets={18} startNotes={guitarStringsStartNotes}/>
          </div>
          <div className="board-container">
            <Piano octaves={4} startNote={pianoStartNote}/>
          </div>
        </div>
      );

    return (
      <div className='application'>
        <ThemeProvider theme={theme}>
          <Layout
            Sidebar={Sidebar}
            Main={Main}
          />
        </ThemeProvider>
      </div>
    );
  }
}
