import { useEffect, useState } from "react";
import { Country } from "../../lib/types";
import InfiniteLoopCarousel from "./InfiniteLoopCarousel";
import useCountryQuery from "../../hooks/useCountryQuery";

const popularCountryCodes = [
  "IDN", "USA", "JPN", "DEU", "BRA", "CAN", "AUS", "IND", "CHN", "RUS",
  "FRA", "GBR", "ITA", "ESP", "MEX", "KOR", "TUR", "SAU", "ZAF", "ARG",
  "NGA", "EGY", "THA", "VNM", "PHL", "MYS", "SGP", "NLD", "SWE", "CHE"
];

const PopularCountries = () => {
  const { countryData } = useCountryQuery();
  const [firstCountrySet, setFirstCountrySet] = useState<Country[]>([]);
  const [secondCountrySet, setSecondCountrySet] = useState<Country[]>([]);

  useEffect(() => {
    if (countryData) {
      const filteredCountries = countryData.filter(country =>
        popularCountryCodes.includes(country.cca3)
      );
      const half = Math.ceil(filteredCountries.length / 2);
      setFirstCountrySet(filteredCountries.slice(0, half));
      setSecondCountrySet(filteredCountries.slice(half));
    }
  }, [countryData]);

  return (
    <div className="p-10 bg-background">
      <h2 className="text-5xl font-bold mb-4 text-center text-primary">Popular Countries</h2>
      <p className="text-lg mb-10 text-center text-textPrimary">Explore some of the most popular countries around the world.</p>
      <InfiniteLoopCarousel firstCountrySet={firstCountrySet} secondCountrySet={secondCountrySet}/>
    </div>
  );
};

export default PopularCountries;