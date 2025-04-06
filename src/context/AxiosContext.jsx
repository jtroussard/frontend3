import { createContext, useContext } from 'react';

const AxiosContext = createContext(null);

export const AxiosProvider = AxiosContext.Provider;

export function useAxios() {
  const axios = useContext(AxiosContext);
  if (!axios) throw new Error("useAxios must be used within an AxiosProvider");
  return axios;
}
