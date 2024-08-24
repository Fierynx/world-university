import CountryInfo from "../components/CountryInfo";
import useCountryQuery from "../hooks/useCountryQuery";

const CountryDetail = () => {
  const { countryData } = useCountryQuery();
  return (
    <div className="mt-20">
      {
        countryData?.map((country) => {
          return (
            <CountryInfo key={country.cca3} country={country}/>
          )
        })
      }
    </div>
  );
}

export default CountryDetail;