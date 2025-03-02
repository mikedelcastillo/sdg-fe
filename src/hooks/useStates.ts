import { useQuery } from '@tanstack/react-query';
import { fetchStates } from '../services/api';

export const useStates = (countryId: number) => {
  return useQuery({
    queryKey: ['states', countryId],
    queryFn: () => fetchStates(countryId),
  });
};
