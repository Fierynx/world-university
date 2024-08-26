import { useParams } from "react-router-dom";
import { useCountry } from "../context/CountryContext";
import CountryInfo from "../components/CountryInfo";
import { useEffect } from "react";

const CountryDetailPage = () => {
  const { cca3, name } = useParams<{ cca3: string; name: string }>();
  const { countries, setFilter } = useCountry();

  useEffect(() => {
    setFilter({ data: name ? name : "", type: "name" });
    scrollTo(0, 0);
  }, [name, setFilter]);

  const filteredCountry = countries?.find((country) => country.cca3 === cca3);

  return (
    <div>
      {filteredCountry ? (
        <CountryInfo country={filteredCountry} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CountryDetailPage;
