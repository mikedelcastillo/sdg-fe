import { FC } from 'react';
import { ApiResponse } from '../services/api';

export type Option = ApiResponse;

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
  const isPlaceholderSelected = value === '';

  const className =
    'border border-gray-300 rounded-md w-[300px] text-[lg] relative bg-[url(./assets/arrow-down.svg)] bg-no-repeat bg-[right_1em_center] bg-100%';

  return (
    <div className={className}>
      {placeholder && isPlaceholderSelected && (
        <div className="py-2 pl-4 pr-10 w-full text-gray-400 absolute pointer-events-none truncate">
          {placeholder}
        </div>
      )}
      <select
        className="appearance-none py-2 pl-4 pr-10 w-full"
        onChange={(e) => onChange(e.target.value)}
        value={value}
      >
        {placeholder && <option value="" disabled hidden></option>}
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};
