import { FC, useState } from 'react';
import { useCountries } from '../hooks/useCountries';
import { useStates } from '../hooks/useStates';
import { Dropdown } from './Dropdown';

export const App: FC = () => {
  const [countryId, setCountryId] = useState<string>('');
  const [stateId, setStateId] = useState<string>('');
  const {
    data: countries,
    isFetching: isLoadingCountries,
    error: errorCountries,
  } = useCountries();
  const {
    data: states,
    isFetching: isLoadingStates,
    error: errorStates,
  } = useStates(countryId === '' ? null : Number(countryId));

  const selectCountry = (value: string) => {
    setCountryId(value);
    setStateId('');
  };

  const selectState = (value: string) => {
    setStateId(value);
  };

  return (
    <div className="w-full h-full grid justify-center items-center">
      <div className="flex flex-col gap-4">
        <Dropdown
          options={countries}
          value={countryId}
          onChange={selectCountry}
          placeholder="Select a country"
          loading={isLoadingCountries}
          disabled={isLoadingCountries}
          error={errorCountries?.message}
          tabIndex={1}
        />
        <Dropdown
          options={states}
          value={stateId}
          onChange={selectState}
          placeholder="Select a state"
          loading={isLoadingStates}
          disabled={isLoadingStates || countryId === ''}
          error={errorStates?.message}
          tabIndex={2}
        />
      </div>
    </div>
  );
};
