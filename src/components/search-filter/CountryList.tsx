import { Link } from "react-router-dom";
import CountryCard from "../general/CountryCard";
import { Country } from "../../lib/types";

type CountryListProps = {
  currentCountries: Country[] | undefined;
  indexOfFirstCountry: number;
  indexOfLastCountry: number;
  totalCountries: number;
};

const CountryList = ({ currentCountries, indexOfFirstCountry, indexOfLastCountry, totalCountries } : CountryListProps) => {
  const adjustedIndexOfLastCountry = Math.min(indexOfLastCountry, totalCountries);

  return (
    <>
      {currentCountries?.length === 0 ? (
        <div className="text-red-500 mt-16 text-lg">No countries found. Try adjusting your filters or search term.</div>
      ) : (
        <>
          <div className="text-gray-600 text-sm mb-6">
            {totalCountries > 1 
            ? 
            `Showing ${indexOfFirstCountry + 1}-${adjustedIndexOfLastCountry} of ${totalCountries} results`
            :
            `Showing ${totalCountries} result`
            }
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-screen-lg">
            {currentCountries?.map((country) => (
              <Link to={`/country-detail/${country.cca3}/${country.name.common}`} key={country.cca3}>
                <CountryCard key={country.cca3} country={country} />
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default CountryList;
