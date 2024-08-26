import CountryInfo from "../components/CountryInfo";
import { useCountry } from "../context/CountryContext";

const CountrySearchPage = () => {
  const {countries, setSearchVal, searchVal} = useCountry();
  return (
    <div>
      <input className="border border-black" type="text" name="" id="" onChange={(e) => setSearchVal(e.target.value)} value={searchVal} />
      <div>
        {
          countries?.map((country) => {
            return (
              <CountryInfo key={country.cca3} country={country}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default CountrySearchPage;