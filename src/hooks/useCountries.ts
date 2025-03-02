import { useQuery } from '@tanstack/react-query';
import { fetchCountries } from '../services/api';

export const useCountries = () => {
  return useQuery({
    queryKey: ['countries'],
    queryFn: fetchCountries,
    initialData: [],
  });
};
