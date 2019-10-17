import { NOTES } from '../../constants';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';

export default ({ selectedScale, onSelect = f => f }) => {
  const
    options = NOTES.map(note => <MenuItem key={note} value={note}>{note}</MenuItem>),
    handleChange = event => onSelect(event.target.value);

  return (
    <FormControl fullWidth variant="filled">
      <InputLabel htmlFor="sidebar-select-scale-key">
        Scale Key
      </InputLabel>
      <Select
        value={selectedScale.key}
        inputProps={{
          id: 'sidebar-select-scale-key',
        }}
        onChange={handleChange}
      >
        {options}
      </Select>
    </FormControl>
  )
};
