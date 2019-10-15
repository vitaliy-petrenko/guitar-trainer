import { NOTES } from '../../audioCore';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import React from 'react';

export default ({ selectedScale, onSelect = f => f }) => {
  const
    options = NOTES.map(note => <MenuItem key={note} value={note}>{note}</MenuItem>),
    handleChange = event => onSelect(event.target.value);

  return (
    <FormControl fullWidth>
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
