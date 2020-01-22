import React from 'react'
import './Sidebar.scss'
import ScaleSettings from '../ScaleSettings'
import Tuner from '../Tuner'
import StartRecording from '../StartRecording'
import SidebarItem from './SidebarItem'
import { Typography } from '@material-ui/core'

export interface IProps {
  isMicActive: boolean,
  playingNote: IPlayingNote,
}

const Sidebar: React.FC<IProps> = (
  { isMicActive, playingNote }
) => {
  return (
    <div className='sidebar'>
      <div className="sidebar__in">
        {!isMicActive && (
          <StartRecording />
        )}

        <SidebarItem title='Mini Tuner'>
          {!isMicActive ? (
            <Typography variant='subtitle2' color='error'>
              Enable recording to use tuner
            </Typography>
          ) : (
            <Tuner playingNote={playingNote} />
          )}
        </SidebarItem>

        <SidebarItem title='Scale Settings'>
          <ScaleSettings />
        </SidebarItem>
      </div>
    </div>
  )
}


export default Sidebar
