import React from 'react';
import './Sidebar.scss';
import audioService from '../../audioCore';
import { Grid } from '@material-ui/core';
import Tuner from '../Tuner/Tuner';
import StartRecording from './StartRecording';
import SidebarItem from './SidebarItem';
import { SelectedScale, PlayingNote as PlayingNoteType } from '../../types';
import { NOTES, SCALES_NAMES } from '../../constants';
import Select, { SelectOption } from './Select';

export interface IProps {
  isMicActive: boolean,
  selectedScale: SelectedScale,
  playingNote: PlayingNoteType,
  onSelectKey: (key: string) => void,
  onSelectScale: (key: string) => void,
  switchMic: (key: boolean) => void,
}

const scaleKeysOptions: SelectOption[] = NOTES.map(note => ({
  name: note,
  value: note,
}));

const scalesOptions: SelectOption[] = Object.entries(SCALES_NAMES).map(([key, name]) => ({ name, value: key }));

const Sidebar: React.FC<IProps> = (
  { isMicActive, selectedScale, playingNote, switchMic, onSelectKey, onSelectScale }
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
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Select
                selectedValue={selectedScale.key}
                options={scaleKeysOptions}
                onSelect={onSelectKey}
                title='Select key'
              />
            </Grid>
            <Grid item xs={12}>
              <Select
                selectedValue={selectedScale.name}
                options={scalesOptions}
                onSelect={onSelectScale}
                title='Select scale'
              />
            </Grid>
          </Grid>
        </SidebarItem>
      </div>
    </div>
  );
};


export default Sidebar;
