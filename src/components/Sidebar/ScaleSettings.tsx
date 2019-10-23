import React from 'react';
import { Grid } from '@material-ui/core';
import Select, { SelectOption } from './Select';
import { SelectedScale } from '../../types';
import { NOTES, SCALES_NAMES } from '../../constants';

export interface IProps {
  selectedScale: SelectedScale,
  onSelectKey: (key: string) => void,
  onSelectScale: (key: string) => void,
}

const scaleKeysOptions: SelectOption[] = NOTES.map(note => ({
  name: note,
  value: note,
}));

const scalesOptions: SelectOption[] = Object.entries(SCALES_NAMES).map(([key, name]) => ({ name, value: key }));

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
  );
};

export default ScaleSettings;
