import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CountryInfo from "../components/CountryInfo";
import useCountryQuery from "../hooks/useCountryQuery";

const CountryDetailPage: React.FC = () => {
  const { cca3, name } = useParams<{ cca3: string; name: string }>();
  const { countryData, countryQuery } = useCountryQuery("name", name);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredCountry = countryData?.find(
    (country) => country.cca3 === cca3
  );

  return (
    <div>
      {countryQuery.isFetching ? (
        <p>Loading...</p>
      ) : (
        filteredCountry && <CountryInfo country={filteredCountry} />
      )}
    </div>
  );
};

export default CountryDetailPage;
