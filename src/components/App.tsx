import { FC, useState } from 'react';
import { useCountries } from '../hooks/useCountries';
import { useStates } from '../hooks/useStates';

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
      <h1>Hello World</h1>
      <select onChange={(e) => selectCountry(e.target.value)} value={countryId}>
        <option value="" disabled>
          Select a country
        </option>
        {countries?.map((country) => (
          <option key={country.id} value={country.id}>
            {country.value}
          </option>
        ))}
      </select>
      <select onChange={(e) => selectState(e.target.value)} value={stateId}>
        <option value="" disabled>
          Select a state
        </option>
        {states?.map((state) => (
          <option key={state.id} value={state.id}>
            {state.value}
          </option>
        ))}
      </select>
    </div>
  );
};
