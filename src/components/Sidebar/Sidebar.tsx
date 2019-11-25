import React from 'react'
import './Sidebar.scss'
import audioService from '../../audioCore'
import ScaleSettings from './ScaleSettingsContainer'
import Tuner from '../Tuner/Tuner'
import StartRecording from './StartRecording'
import SidebarItem from './SidebarItem'
import { Typography } from '@material-ui/core'

export interface IProps {
  isMicActive: boolean,
  playingNote: IPlayingNote,
  switchMic: (key: boolean) => void,
}

const Sidebar: React.FC<IProps> = (
  { isMicActive, playingNote, switchMic }
) => {
  const
    initAudio = () => {
      switchMic(true)
      audioService.init()
    }

  return (
    <div className='sidebar'>
      <div className="sidebar__in">
        {!isMicActive && (
          <StartRecording start={initAudio}/>
        )}

        <SidebarItem title='Mini Tuner'>
          {!isMicActive ? (
            <Typography variant='subtitle2' color='error'>
              Enable recording to use tuner
            </Typography>
          ) : (
            <Tuner playingNote={playingNote}/>
          )}
        </SidebarItem>

        <SidebarItem title='Scale Settings'>
          <ScaleSettings/>
        </SidebarItem>
      </div>
    </div>
  )
}


export default Sidebar
