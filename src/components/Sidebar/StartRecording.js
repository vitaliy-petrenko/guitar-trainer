import { Button } from '@material-ui/core';
import React from 'react';

export const StartRecording = ({ start = f => f }) => (
  <Button fullWidth variant='contained' color='secondary' onClick={start}>
    <span aria-label='microphone' role='img'>🎤</span>&nbsp;Enable Recording
  </Button>
);
