import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import uuid from 'uuid';

type SelectValue = string;

export type SelectOption = {
  name: string,
  value: SelectValue
}

export interface IProps {
  options: SelectOption[],
  title: string,
  selectedValue: SelectValue,
  onSelect: (key: SelectValue) => void,
}

const SelectKey: React.FC<IProps> = ({ options, onSelect, selectedValue, title }) => {
  const
    optionsElements = options.map(({ name, value }) => <MenuItem key={value} value={value}>{name}</MenuItem>),
    handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      onSelect(event.target.value as string);
    },
    id = uuid.v4();

  return (
    <FormControl fullWidth variant="filled">
      <InputLabel htmlFor={id}>
        {title}
      </InputLabel>
      <Select
        value={selectedValue}
        inputProps={{ id }}
        onChange={handleChange}
      >
        {optionsElements}
      </Select>
    </FormControl>
  );
};

export default SelectKey;
