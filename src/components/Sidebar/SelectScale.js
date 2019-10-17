import { SCALES_NAMES } from '../../constants';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';

export default ({ selectedScale, onSelect = f => f }) => {
  const
    options = Object.entries(SCALES_NAMES).map(([key, name]) => <MenuItem key={key} value={key}>{name}</MenuItem>),
    handleChange = event => onSelect(event.target.value);

  return (
    <FormControl fullWidth variant="filled">
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
