import { Country } from "../lib/types";

const CountryCard = ({ country }: { country: Country }) => {
  return (
    <div className="w-60 p-2 bg-gray-100 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
      <img
        src={country.flags.png}
        alt={country.name.common}
        className="h-40 object-cover rounded-xl"
      />
      <div className="p-2">
        <h2 className="text-xl font-bold mb-2">{country.name.common}</h2>
        <p className="text-sm text-gray-600">Region: {country.region}</p>
        <p className="text-sm text-gray-600">Capital: {country.capital}</p>
        <p className="text-sm text-gray-600">
          Population: {country.population.toLocaleString('en-US')}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;