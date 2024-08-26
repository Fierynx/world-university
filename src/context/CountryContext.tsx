import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Country } from '../lib/types';
import useCountryQuery, { URLTypes } from '../hooks/useCountryQuery';

type FilterParams = { 
  type: URLTypes | undefined; 
  data: string | boolean;
}

type CountryContextProps = {
  countries?: Country[];
  setFilter: (filter: FilterParams) => void;
  isLoading: boolean;
  searchVal : string;
  setSearchVal: React.Dispatch<React.SetStateAction<string>>;
}

const CountryContext = createContext<CountryContextProps | undefined>(undefined);

export const CountryProvider = ({ children }: { children: ReactNode }) => {

  const [type, setType] = useState<URLTypes | undefined>();
  const [data, setData] = useState<boolean | string>("");
  
  const [searchVal, setSearchVal] = useState("");

  const { countryData, countryQuery } = useCountryQuery(type, data);
  const [filteredData, setFilteredData] = useState<Country[]>([]);

  useEffect(() => {
    if(countryData && !searchVal) {
      setFilteredData(countryData);
    }

    if(searchVal && countryData) {
      setFilteredData(countryData.filter(country => {
        const countryName = country.name.common.toLowerCase();
        const searchValue = searchVal.toLowerCase().replace(/\s+/g, '');
        return countryName.includes(searchValue);
      }));
    }

  }, [searchVal, countryData]);

  const setFilter = ({type, data}: {type: URLTypes | undefined; data: string | boolean}) => {
    setType(type);
    setData(data);
  }

  return (
    <CountryContext.Provider value={{ setFilter, countries: filteredData, isLoading: countryQuery.isFetching, setSearchVal, searchVal }}>
      {children}
    </CountryContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCountry = () => {
  const context = useContext(CountryContext);
  if(!context) {
    throw new Error('useCountry must be used within a CountryProvider');
  }
  return context;
};