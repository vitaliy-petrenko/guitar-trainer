import React from 'react';
import './Sidebar.scss';
import audioService from '../../audioCore';
import ScaleSettings from './ScaleSettingsContainer';
import Tuner from '../Tuner/Tuner';
import StartRecording from './StartRecording';
import SidebarItem from './SidebarItem';
import { PlayingNote as PlayingNoteType } from '../../types';

export interface IProps {
  isMicActive: boolean,
  playingNote: PlayingNoteType,
  switchMic: (key: boolean) => void,
}

const Sidebar: React.FC<IProps> = (
  { isMicActive, playingNote, switchMic }
) => {
  const
    initAudio = () => {
      switchMic(true);
      audioService.init();
    };

  return (
    <div className='sidebar'>
      <div className="sidebar__in">

        <SidebarItem title='Mini Tuner'>
          {!isMicActive ? (
            <StartRecording start={initAudio}/>
          ) : (
            <Tuner playingNote={playingNote}/>
          )}
        </SidebarItem>

        <SidebarItem title='Scale Settings'>
          <ScaleSettings/>
        </SidebarItem>
      </div>
    </div>
  );
};


export default Sidebar;
