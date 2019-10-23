import React from 'react';
import './App.scss';
import audioService from '../audioCore';
import SidebarContainer from './Sidebar/SidebarContainer';
import MainContainer from './MainContainer';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';
import Layout from './Layout';
import { Note } from '../types';

export interface IProps {
  isMicActive: boolean,
  setPlayingNote: (note: Note) => void,
}

export default class App extends React.Component<IProps> {
  componentDidMount() {
    audioService.on('notesDetected', (notesData: Note[] = []) => {
      const
        [note] = notesData,
        setter = this.props.setPlayingNote;

      typeof setter === 'function' && setter(note);
    });
  }

  render() {
    const { isMicActive } = this.props;

    return (
      <div className='application'>
        <ThemeProvider theme={theme}>
          <Layout
            Sidebar={SidebarContainer}
            Main={MainContainer}
            isMicActive={isMicActive}
          />
        </ThemeProvider>
      </div>
    );
  }
}
