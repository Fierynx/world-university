import CountryInfo from "../components/CountryInfo";
import { useCountry } from "../context/CountryContext";

const CountryDetailPage = () => {
  const {countries, isLoading, setFilter, setSearchVal, searchVal} = useCountry();

  return (
    <div className="mt-20">
      {isLoading && <div>Loading...</div> }
      <input className="" type="text" onChange={(e) => setSearchVal(e.target.value)} value={searchVal}/>
      <div className="flex items-center justify-center gap-4">

        <div onClick={() => {
          setFilter({data: "indonesian", type: "language"});
        }}>Language</div>

        <div onClick={() => {
          setFilter({data: false, type: "independent" });
        }}>Independent</div>

        <div onClick={() => {
          setFilter({data: "america", type: "region" });
        }}>Region</div>
        
      </div>
      {
        countries?.map((country) => {
          return (
            <CountryInfo key={country.cca3} country={country}/>
          )
        })
      }
    </div>
  );
}

export default CountryDetailPage;