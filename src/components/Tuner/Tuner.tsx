import React from 'react'
import './Tuner.scss'
import Note from '../Note/Note'
import { IPlayingNote } from '../../types/audio'

const REASONABLE_DELTA = 6

interface ITunerArrow {
  isActive: boolean
}

const Arrow: React.FC<ITunerArrow> = ({ isActive }) => {
  const classNames = ['tuner__arrow']

  if (isActive) {
    classNames.push('is-active')
  }

  return (
    <div className={classNames.join(' ')}/>
  )
}

interface IProps {
  playingNote: IPlayingNote
}

const Tuner: React.FC<IProps> = ({ playingNote }) => {
  return (
    <div className='tuner'>
      <div className="tuner__col">
        <Arrow isActive={playingNote.cents < -REASONABLE_DELTA}/>
      </div>
      <div className="tuner__col tuner__note">
        <Note
          isActive={playingNote.cents >= -REASONABLE_DELTA && playingNote.cents <= REASONABLE_DELTA}
          name={playingNote.name}
          octave={playingNote.octave}
        />
      </div>
      <div className="tuner__col">
        <Arrow isActive={playingNote.cents > REASONABLE_DELTA}/>
      </div>
    </div>
  )
}

export default Tuner
