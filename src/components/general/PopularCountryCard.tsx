import { Country } from "../lib/types";

const PopularCountryCard = ({ country }: { country: Country }) => {
  return (
    <div className="w-full sm:w-48 md:w-60 p-4 bg-gray-100 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl flex flex-col items-center justify-center">
      <img
        src={country.flags.png}
        alt={country.name.common}
        className="w-full h-32 md:h-40 object-cover rounded-xl"
      />
      <div className="p-2">
        <h2 className="text-lg md:text-xl font-bold mb-2 text-center">{country.name.common}</h2>
      </div>
    </div>
  );
};

export default PopularCountryCard;
