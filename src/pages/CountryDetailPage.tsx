import { useParams } from "react-router-dom";
import { useCountry } from "../context/CountryContext";
import CountryInfo from "../components/CountryInfo";

const CountryDetailPage = () => {
  const { name } = useParams<{ name: string }>();
  const { countries, setFilter } = useCountry();
  setFilter({ data: name ? name : "", type: "name" });
  scrollTo(0, 0);

  return (
    <div>
      {countries && <CountryInfo country={countries[0]} />}
    </div>
  );
};

export default CountryDetailPage;