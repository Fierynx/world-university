import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Country } from '../lib/types';

type CountryContextProps = {
  countries: Country[];
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>;
}

const CountryContext = createContext<CountryContextProps | undefined>(undefined);

export const CountryProvider = ({ children }: { children: ReactNode }) => {
  const [countries, setCountries] = useState<Country[]>([]);

  return (
    <CountryContext.Provider value={{ countries, setCountries }}>
      {children}
    </CountryContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCountryContext = () => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error('useCountryContext must be used within a CountryProvider');
  }
  return context;
};