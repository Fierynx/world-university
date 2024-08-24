import { Country } from "../lib/types";

const CountryInfo = ({ country }: { country: Country }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img src={country.flags.png} alt={country.name.common} className="w-full h-96 object-cover" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold">{country.name.common}</h1>
          <p className="text-lg mt-2">Capital: {country.capital}</p>
          <p className="text-lg mt-2">Region: {country.region}</p>
          <p className="text-lg mt-2">Subregion: {country.subregion}</p>
          <p className="text-lg mt-2">Population: {country.population}</p>
          <p className="text-lg mt-2">Languages: {country.languages ? Object.values(country.languages).join(', ') : "No languages"}</p>
          <p className="text-lg mt-2">Currencies: {country.currencies ? Object.keys(country.currencies).join(', ') : "No currencies"}</p>
          <p className="text-lg mt-2">Timezones: {country.timezones ? Object.values(country.timezones).join(', '): "No timezones"}</p>
        </div>
      </div>
    </div>
  );
}

export default CountryInfo;