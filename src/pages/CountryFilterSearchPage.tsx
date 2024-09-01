import { useCountry } from "../context/CountryContext";
import { useEffect, useRef, useState } from "react";
import useCountryQuery from "../hooks/useCountryQuery";
import SearchInput from "../components/search-filter/SearchInput";
import FilterOptions from "../components/search-filter/FilterOptions";
import FilterDropdown from "../components/search-filter/FilterDropdown";
import CountryList from "../components/search-filter/CountryList";
import Pagination from "../components/search-filter/Pagination";
import CountryFilterSearchSkeleton from "../components/skeleton/CountryFilterSearchSkeleton";

type FilterType = "region" | "language" | "independent";

const CountryFilterSearchPage = () => {
  const { countries, setSearchVal, searchVal, setFilter, isLoading } = useCountry();
  const { countryData, countryQuery } = useCountryQuery();
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

  return (
    <>
      {countryQuery.isLoading || isLoading ? (
        <CountryFilterSearchSkeleton />
      ) : (
        <div className="flex flex-col items-center min-h-screen min-w-screen p-8 bg-gray-100">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-primary mb-4">Explore Countries Around the World</h1>
          </div>
  
          <div className="bg-white shadow-md rounded-lg p-4 mb-12 w-full max-w-screen-lg">
            <div className="flex flex-col md:flex-row justify-between gap-4 items-center">
              <SearchInput searchVal={searchVal} setSearchVal={setSearchVal} setCurrentPage={setCurrentPage} />
              <FilterOptions selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
              {selectedFilter && (
                <FilterDropdown
                  selectedFilter={selectedFilter}
                  dropdownOptions={dropdownOptions}
                  handleFilterChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                    const filterValue = event.target.value;
                    if (selectedFilter === "independent") {
                      const independentValue = filterValue === "Independent" ? "true" : "false";
                      setFilter({ type: selectedFilter, data: independentValue });
                    } else {
                      setFilter({ type: selectedFilter!, data: filterValue });
                    }
                    setCurrentPage(1);
                  }}
                  filterRef={filterRef}
                />
              )}
            </div>
  
            <div className="flex justify-end mt-4">
              <button
                onClick={handleClear}
                className="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600 transition">
                Clear
              </button>
            </div>
          </div>
  
          <CountryList currentCountries={currentCountries} indexOfFirstCountry={indexOfFirstCountry} indexOfLastCountry={indexOfLastCountry} totalCountries={countries?.length ?? 0} />
          {
            currentCountries && currentCountries?.length >= countriesPerPage && <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />
          }
        </div>
      )}
    </>
  );
  
};

export default CountryFilterSearchPage;