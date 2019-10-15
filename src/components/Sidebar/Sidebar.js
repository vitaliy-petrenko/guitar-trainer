import React from 'react';
import Tuner from '../Tuner/TunerContainer';
import './Sidebar.scss';
import audioService from '../../audioCore';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import SelectKey from './SelectKeyContainer';
import SelectScale from './SelectScaleContainer';
import { StartRecording } from './StartRecording';


const useStyles = makeStyles(theme => ({
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

export default ({ actions, isMicActive }) => {
  const
    { switchMic = f => f } = actions,
    initAudio = () => {
      switchMic(true);
      audioService.init();
    },
    classes = useStyles();

  return (
    <div className='sidebar'>
      <div className="sidebar__in">

        <div className="sidebar__item">
          <Paper className={classes.paper}>
            <Heading>
              Mini Tuner
            </Heading>
            {!isMicActive ? (
              <StartRecording start={initAudio}/>
            ) : (
              <Tuner/>
            )}
          </Paper>
        </div>

        <div className="sidebar__item">
          <Paper className={classes.paper}>
            <Heading>
              Scale Settings
            </Heading>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <SelectKey/>
              </Grid>
              <Grid item xs={12}>
                <SelectScale/>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    </div>
  );
}
