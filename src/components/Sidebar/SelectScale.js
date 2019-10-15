import { SCALES_NAMES } from '../../constants';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import React from 'react';

export default ({ selectedScale, onSelect = f => f }) => {
  const
    options = Object.entries(SCALES_NAMES).map(([key, name]) => <MenuItem key={key} value={key}>{name}</MenuItem>),
    handleChange = event => onSelect(event.target.value);

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="sidebar-select-scale">
        Scale
      </InputLabel>
      <Select
        value={selectedScale.name}
        inputProps={{
          id: 'sidebar-select-scale',
        }}
        onChange={handleChange}
      >
        {options}
      </Select>
    </FormControl>
  );
};
