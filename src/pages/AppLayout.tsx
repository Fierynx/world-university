import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useCountryQuery from "../hooks/useCountryQuery";

export const AppLayout = () => {
  const { countryData, countryQuery } = useCountryQuery();
  if (countryQuery.isLoading) return <p>Loading...</p>;
  if (countryQuery.isError) return <p>Error fetching countries</p>;

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <ol className="list-decimal">
          {countryData?.map((country) => (
            <li className="" key={country.cca3}>{country.languages ? Object.values(country.languages) : "No languages available"} <img src={country.flags.png} alt="" /></li>
          ))}
        </ol>
        <Outlet /> 
      </div>
      <Footer />
    </>
  );
};