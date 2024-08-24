import { Country } from "../lib/types";
import { API } from "../service/API";
import { useQuery } from "@tanstack/react-query";

export default function useCountryQuery() {
  const countryQuery = useQuery({
    queryFn: async () => {
      return await API.get<Country[]>("/all");
    },
    queryKey: ["countries"],
  });

  const countryData = countryQuery.data?.data; 

  return { countryData, countryQuery };
}
