import CountryInfo from "../components/CountryInfo";
import useCountryQuery from "../hooks/useCountryQuery";

const CountryDetail = () => {
  const { countryData } = useCountryQuery();
  return (
    <>
      {
        countryData?.map((country) => {
          return (
            <CountryInfo key={country.cca3} country={country}/>
          )
        })
      }
    </>
  );
}

export default CountryDetail;