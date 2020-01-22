import React, { useEffect } from 'react'
import './App.scss'
import audioService from '../audioCore'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../theme'
import Layout from './Layout'

export interface IProps {
  isMicActive: boolean,
  setPlayingNote: (note: INote) => void,
}

const App: React.FC<IProps> = ({ isMicActive, setPlayingNote }) => {
  useEffect(() => {
    audioService.on('notesDetected', (notesData: INote[] = []) => {
      const
        [note] = notesData,
        setter = setPlayingNote

      typeof setter === 'function' && setter(note)
    })
  })

  return (
    <div className='application'>
      <ThemeProvider theme={theme}>
        <Layout
          Sidebar={Sidebar}
          Main={MainContainer}
          isMicActive={isMicActive}
        />
      </ThemeProvider>
    </div>
  )
}

export default App
