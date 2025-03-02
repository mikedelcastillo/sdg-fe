import { FC, useState } from 'react';
import { useCountries } from '../hooks/useCountries';
import { useStates } from '../hooks/useStates';
import { Dropdown } from './Dropdown';

export const App: FC = () => {
  const [countryId, setCountryId] = useState<string>('');
  const [stateId, setStateId] = useState<string>('');
  const { data: countries } = useCountries();
  const { data: states } = useStates(
    countryId === '' ? null : Number(countryId)
  );

  const selectCountry = (value: string) => {
    console.log(value);
    setCountryId(value);
  };

  const selectState = (value: string) => {
    console.log(value);
    setStateId(value);
  };

  return (
    <div>
      <Dropdown
        options={countries}
        value={countryId}
        onChange={selectCountry}
        placeholder="Select a country"
      />
      <Dropdown
        options={states}
        value={stateId}
        onChange={selectState}
        placeholder="Select a state"
      />
    </div>
  );
};
