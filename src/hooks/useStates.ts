import { useQuery } from '@tanstack/react-query';
import { fetchStates } from '../services/api';

export const useStates = (countryId: number | null) => {
  return useQuery({
    queryKey: ['states', countryId],
    queryFn: () => (countryId === null ? [] : fetchStates(countryId)),
  });
};
