import { Link } from "react-router-dom";
import CountryCard from "../CountryCard";
import { Country } from "../../lib/types";

const InfiniteLoopCarousel = ({firstCountrySet, secondCountrySet} : {
  firstCountrySet: Country[],
  secondCountrySet: Country[]
}) => {
  return (
    <div className="flex flex-col gap-10">
        <div className="flex overflow-hidden space-x-6 py-1">
          <div className="flex gap-6 animate-loop-scroll-left sm:animate-loop-scroll-left-sm md:animate-loop-scroll-left-md">
            {firstCountrySet.map((country) => (
              <Link to={`/country-detail/${country.cca3}/${country.name.common}`} key={country.cca3}>
                <CountryCard country={country}/>
              </Link>
            ))}
          </div>
          <div className="flex gap-6 animate-loop-scroll-left sm:animate-loop-scroll-left-sm md:animate-loop-scroll-left-md">
            {firstCountrySet.map((country) => (
              <Link to={`/country-detail/${country.cca3}/${country.name.common}`} key={country.cca3}>
                <CountryCard country={country}/>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex overflow-hidden space-x-6 py-1">
          <div className="flex gap-6 animate-loop-scroll-right sm:animate-loop-scroll-right-sm md:animate-loop-scroll-right-md">
            {secondCountrySet.map((country) => (
              <Link to={`/country-detail/${country.cca3}/${country.name.common}`} key={country.cca3}>
                <CountryCard country={country}/>
              </Link>
            ))}
          </div>
          <div className="flex gap-6 animate-loop-scroll-right sm:animate-loop-scroll-right-sm md:animate-loop-scroll-right-md">
            {secondCountrySet.map((country) => (
              <Link to={`/country-detail/${country.cca3}/${country.name.common}`} key={country.cca3}>
                <CountryCard country={country}/>
              </Link>
            ))}
          </div>
        </div>
      </div>
  );
}

export default InfiniteLoopCarousel;