import React from 'react'
import { Grid } from '@material-ui/core'
import Select, { ISelectOption, TSelectValue } from './Select'
import { ISelectedScale } from '../../types/audio'
import { NOTES, SCALES_NAMES } from '../../constants'

export interface IProps {
  selectedScale: ISelectedScale,
  onSelectKey: (key: TSelectValue) => void,
  onSelectScale: (key: TSelectValue) => void,
}

const scaleKeysOptions: ISelectOption[] = NOTES.map(note => ({
  name: note,
  value: note,
}))

const scalesOptions: ISelectOption[] = Object.entries(SCALES_NAMES).map(([key, name]) => ({ name, value: key }))

const ScaleSettings: React.FC<IProps> = ({ selectedScale, onSelectKey, onSelectScale }) => {
  return (
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
  )
}

export default ScaleSettings
