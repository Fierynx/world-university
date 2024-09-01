import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useCountryQuery from "../hooks/useCountryQuery";
import CountryDetailSkeleton from "../components/skeleton/CountryDetailSkeleton";

const CountryDetailPage = () => {
  const { cca3, name } = useParams<{ cca3: string; name: string }>();
  const { countryData, countryQuery } = useCountryQuery("name", name);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredCountry = countryData?.find(
    (country) => country.cca3 === cca3
  );

  return (
    <div className="min-h-screen bg-white py-10">
      {countryQuery.isFetching ? (
        <CountryDetailSkeleton/>
        ) : (
        filteredCountry && (
          <div className="container mx-auto bg-slate-100 shadow-lg rounded-lg p-6">
            <button
              onClick={() => navigate(-1)} 
              className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Back
            </button>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <img
                  src={filteredCountry.flags.png}
                  alt={filteredCountry.name.common}
                  className="w-full h-96 object-cover rounded-lg"/>
              </div>
              <div className="md:w-1/2">
                <h1 className="text-4xl font-bold mb-4">{filteredCountry.name.common}</h1>
                <p className="text-lg mb-2"><strong>Official Name:</strong> {filteredCountry.name.official}</p>
                <p className="text-lg mb-2"><strong>Capital:</strong> {filteredCountry.capital.join(', ')}</p>
                <p className="text-lg mb-2"><strong>Population:</strong> {filteredCountry.population.toLocaleString()}</p>
                <p className="text-lg mb-2"><strong>Area:</strong> {filteredCountry.area.toLocaleString()} km²</p>
                <p className="text-lg mb-2"><strong>Region:</strong> {filteredCountry.region}</p>
                <p className="text-lg mb-2"><strong>Subregion:</strong> {filteredCountry.subregion}</p>
                <p className="text-lg mb-2"><strong>Languages:</strong> {Object.values(filteredCountry.languages).join(', ')}</p>
                <p className="text-lg mb-2"><strong>Currencies:</strong> {Object.values(filteredCountry.currencies).map(currency => currency.name).join(', ')}</p>
                <div className="mt-4">
                  <h2 className="text-2xl font-semibold mb-2">Map Location</h2>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${filteredCountry.latlng[0]},${filteredCountry.latlng[1]}`}
                    target="_blank"
                    className="text-blue-500 underline">
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default CountryDetailPage;
