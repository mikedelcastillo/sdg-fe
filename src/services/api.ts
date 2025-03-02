export type ApiResponse = {
  id: number;
  value: string;
};

export class ApiRequestError extends Error {
  response: Response;
  constructor(message: string, response: Response) {
    super(message);
    this.response = response;
  }
}

const BASE_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const apiRequest = async (path: string) => {
  const response = await fetch(BASE_URL + path, {
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': API_KEY,
    },
  });

  if (!response.ok) throw new ApiRequestError('Failed to fetch data', response);

  return response.json() as Promise<ApiResponse[]>;
};

export const fetchCountries = () => apiRequest('/countries');
export const fetchStates = (countryId: number) =>
  apiRequest(`/countries/${countryId}/states`);
