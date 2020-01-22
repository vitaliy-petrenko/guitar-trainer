import { Button } from '@material-ui/core'
import React from 'react'
import audioService from '../../audioCore'

export interface IProps {
  init: () => void,
}

const StartRecording: React.FC<IProps> = ({ init }) => {
  const
    initAudio = () => {
      init()
      audioService.init()
    }

  return (
    <Button fullWidth variant='contained' color='secondary' size='large' onClick={initAudio}>
      <span aria-label='microphone' role='img'>🎤</span>&nbsp;Enable Recording
    </Button>
  )
}

export default StartRecording
