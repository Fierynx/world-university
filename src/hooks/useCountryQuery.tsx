import { Country } from "../lib/types";
import { API } from "../service/API";
import { useQuery } from "@tanstack/react-query";

const routeFnList = {
  region: (data: string | boolean) => `/region/${data}`,
  language: (data: string | boolean) => `/lang/${data}`,
  independent: (data: string | boolean) => `/independent?status=${data}`,
  name: (data: string | boolean) => `/name/${data}`,
}

export type URLTypes = keyof typeof routeFnList;

const useCountryQuery = (filterBy?: URLTypes, data?: string | boolean) => {
  const countryQuery = useQuery({
    queryFn: () => {
      const getRoute = filterBy && routeFnList[filterBy];
      return API.get<Country[]>(getRoute && data ? getRoute(data) : "/all");
    },
    queryKey: ["countries", filterBy, data],
  });

  const countryData = countryQuery.data?.data; 

  return { countryData, countryQuery };
}

export default useCountryQuery;
