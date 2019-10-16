import React from 'react';
import './Sidebar.scss';
import audioService from '../../audioCore';
import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import SelectKey from './SelectKeyContainer';
import SelectScale from './SelectScaleContainer';
import Tuner from '../Tuner/TunerContainer';
import { StartRecording } from './StartRecording';

const
  useStyles = makeStyles(theme => ({
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
  }));

const Heading = ({ children }) => (
  <Typography variant="h6" gutterBottom>
    {children}
  </Typography>
);

const SidebarItem = ({ title, children }) => {
  const classes = useStyles();

  return (
    <div className="sidebar__item">
      <Paper className={classes.paper}>
        <Heading>
          {title}
        </Heading>
        {children}
      </Paper>
    </div>
  );
};

export default ({ actions, isMicActive, selectedScaleKey }) => {
  const
    { switchMic = f => f } = actions,
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
            <Tuner/>
          )}
        </SidebarItem>

        <SidebarItem title='Scale Settings'>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <SelectKey/>
            </Grid>
            <Grid item xs={12}>
              <SelectScale/>
            </Grid>
          </Grid>
        </SidebarItem>
      </div>
    </div>
  );
}
