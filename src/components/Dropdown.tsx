import { FC } from 'react';
import { ApiResponse } from '../services/api';

type Option = ApiResponse;

type Props = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export const Dropdown: FC<Props> = ({
  options,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <select onChange={(e) => onChange(e.target.value)} value={value}>
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.value}
        </option>
      ))}
    </select>
  );
};
