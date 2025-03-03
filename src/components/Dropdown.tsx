import { FC, useMemo } from 'react';
import { ApiResponse } from '../services/api';

export type Option = ApiResponse;

type Props = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  loading?: boolean;
  disabled?: boolean;
  error?: string;
  tabIndex?: number;
};

export const Dropdown: FC<Props> = ({
  options,
  value,
  onChange,
  placeholder,
  loading,
  disabled,
  error,
  tabIndex,
}) => {
  const isPlaceholderSelected = value === '';

  const labelClassName = useMemo(() => {
    let className =
      'block relative border border-gray-300 rounded-md w-[300px] text-[lg] overflow-hidden';
    className +=
      ' bg-[url(./assets/arrow-down.svg)] bg-no-repeat bg-[right_1em_center] bg-100%';

    if (loading || disabled) className += ' bg-gray-50';
    if (loading) className += ' cursor-wait';
    else if (disabled) className += ' cursor-not-allowed';
    else className += ' cursor-pointer';

    return className;
  }, [loading, disabled]);

  return (
    <div className="relative">
      <label className={labelClassName}>
        {loading && (
          <div
            data-testid="dropdown-loading"
            className="p-dropdown w-full text-gray-500 absolute inset-0 flex justify-start items-center cursor-wait"
          >
            <div className="spinner" />
          </div>
        )}
        {placeholder && !loading && isPlaceholderSelected && (
          <div className="p-dropdown w-full text-gray-400 absolute pointer-events-none truncate">
            {placeholder}
          </div>
        )}
        <select
          className="appearance-none py-2 pl-4 pr-10 w-full outline-0"
          onChange={(e) => onChange(e.target.value)}
          value={value}
          disabled={disabled}
          tabIndex={tabIndex}
        >
          {placeholder && <option value="" disabled hidden></option>}
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.value}
            </option>
          ))}
        </select>
      </label>

      {error && (
        <div className="text-red-500 text-sm mt-1 font-semibold">{error}</div>
      )}
    </div>
  );
};
