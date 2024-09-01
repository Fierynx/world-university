import { useCountry } from "../context/CountryContext";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useCountryQuery from "../hooks/useCountryQuery";
import PopularCountryCard from "../components/general/PopularCountryCard";

type FilterType = "region" | "language" | "independent";

const CountryFilterSearchPage = () => {
  const { countries, setSearchVal, searchVal, setFilter } = useCountry();
  const { countryData } = useCountryQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState<FilterType | null>(null);
  const [dropdownOptions, setDropdownOptions] = useState<string[]>([]);
  const countriesPerPage = 12;

  const filterRef = useRef<HTMLSelectElement>(null);

  const handleClear = () => {
    setSearchVal('');
    setSelectedFilter(null);
    setFilter({ type: 'region', data: '' });
    setFilter({ type: 'language', data: '' });
    setFilter({ type: 'independent', data: '' });
    if (filterRef.current) filterRef.current.value = '';
  };

  useEffect(() => {
    setCurrentPage(1);

    let options: string[] = [];
    if (selectedFilter === "language") {
      options = Array.from(new Set(
        countryData?.flatMap(country => Object.values(country.languages ?? {}))
      )).sort();
    } else if (selectedFilter === "region") {
      options = Array.from(new Set(
        countryData?.map(country => country.region)
      )).sort();
    } else if (selectedFilter === "independent") {
      options = ["Independent", "Not Independent"];
    }

    setDropdownOptions(options);
  }, [countryData, selectedFilter]);

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries?.slice(indexOfFirstCountry, indexOfLastCountry);
  const totalPages = Math.ceil((countries?.length ?? 0) / countriesPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(event.target.value);
    setCurrentPage(1);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filterValue = event.target.value;

    if (selectedFilter === "independent") {
      const independentValue = filterValue === "Independent" ? "true" : "false";
      setFilter({ type: selectedFilter, data: independentValue });
    } else {
      setFilter({ type: selectedFilter!, data: filterValue });
    }
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col items-center min-h-screen w-full p-8 bg-gray-100">
      {/* Page Introduction */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-4">Explore Countries Around the World</h1>
      </div>

      {/* Search & Filter Section */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-12 w-full max-w-screen-lg">
        <div className="flex flex-col md:flex-row justify-between gap-4 items-center">
          {/* Search Input */}
          <div className="w-full md:w-1/3">
            <input
              id="search"
              type="text"
              placeholder="Enter country name..."
              value={searchVal}
              onChange={handleSearchChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"/>
          </div>

          {/* Filter Selection */}
          <div className="flex gap-4 items-center w-full md:w-2/3">
            <label className="flex items-center">
              <input
                type="radio"
                name="filter"
                value="region"
                checked={selectedFilter === "region"}
                onChange={() => setSelectedFilter("region")}
                className="mr-2"/>
              Filter Region
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="filter"
                value="language"
                checked={selectedFilter === "language"}
                onChange={() => setSelectedFilter("language")}
                className="mr-2"/>
              Filter Language
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="filter"
                value="independent"
                checked={selectedFilter === "independent"}
                onChange={() => setSelectedFilter("independent")}
                className="mr-2"/>
              Filter Independence Status
            </label>

            {/* Filter Dropdown */}
            {selectedFilter && (
              <div className="w-full md:w-1/3">
                <select
                  id="filter"
                  name="filter"
                  onChange={handleFilterChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"
                  ref={filterRef}>
                  <option value="" className="bg-gray-300">Select {selectedFilter.charAt(0).toUpperCase() + selectedFilter.slice(1)}</option>
                  {dropdownOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Clear Button */}
        <div className="flex justify-end mt-4">
          <button
            onClick={handleClear}
            className="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600 transition">
            Clear
          </button>
        </div>
      </div>


      {/* Results */}
      {currentCountries?.length === 0 ? (
        <div className="text-red-500 mt-16 text-lg">No countries found. Try adjusting your filters or search term.</div>
      ) : (
        <>
          <div className="text-gray-600 text-sm mb-6">{`Showing ${indexOfFirstCountry + 1}-${indexOfLastCountry} of ${countries?.length} results`}</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-screen-lg">
            {currentCountries?.map((country) => (
              <Link to={`/country-detail/${country.cca3}/${country.name.common}`} key={country.cca3}>
                <PopularCountryCard key={country.cca3} country={country} />
              </Link>
            ))}
          </div>
        </>
      )}

      {/* Pagination */}
      <div className="mt-10">
        <div className="flex justify-center space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded-full ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'} transition`}>
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryFilterSearchPage;