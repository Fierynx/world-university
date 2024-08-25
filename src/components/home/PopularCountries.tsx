import { useEffect, useState } from "react";
import { useCountry } from "../../context/CountryContext";
import { Country } from "../../lib/types";
import InfiniteLoopCarousel from "./InfiniteLoopCarousel";

const popularCountryNames = [
  "Indonesia",
  "United States",
  "Japan",
  "Germany",
  "Brazil",
  "Canada",
  "Australia",
  "India",
  "China",
  "Russia",
  "France",
  "United Kingdom",
  "Italy",
  "Spain",
  "Mexico",
  "South Korea",
  "Turkey",
  "Saudi Arabia",
  "South Africa",
  "Argentina",
  "Nigeria",
  "Egypt",
  "Thailand",
  "Vietnam",
  "Philippines",
  "Malaysia",
  "Singapore",
  "Netherlands",
  "Sweden",
  "Switzerland"
];

const PopularCountries = () => {
  const { countries } = useCountry();
  const [firstCountrySet, setFirstCountrySet] = useState<Country[]>([]);
  const [secondCountrySet, setSecondCountrySet] = useState<Country[]>([]);

  useEffect(() => {
    if (countries) {
      const filteredCountries = countries.filter(country =>
        popularCountryNames.includes(country.name.common)
      );
      const half = Math.ceil(filteredCountries.length / 2);
      setFirstCountrySet(filteredCountries.slice(0, half));
      setSecondCountrySet(filteredCountries.slice(half));
    }
    console.log(countries);
  }, [countries]);

  return (
    <div className="p-10 bg-background">
      <h2 className="text-5xl font-bold mb-4 text-center text-primary">Popular Countries</h2>
      <p className="text-lg mb-10 text-center text-textPrimary">Explore some of the most popular countries around the world.</p>
      <InfiniteLoopCarousel firstCountrySet={firstCountrySet} secondCountrySet={secondCountrySet}/>
    </div>
  );
};

export default PopularCountries;