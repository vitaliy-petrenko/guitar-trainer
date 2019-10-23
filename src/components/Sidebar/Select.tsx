import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import uuid from 'uuid';

export type TSelectValue = string;

export interface ISelectOption {
  name: string,
  value: TSelectValue,
}

export interface IProps {
  options: ISelectOption[],
  title: string,
  selectedValue: TSelectValue,
  onSelect: (key: TSelectValue) => void,
}

const SidebarSelect: React.FC<IProps> = ({ options, onSelect, selectedValue, title }) => {
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

export default SidebarSelect;
