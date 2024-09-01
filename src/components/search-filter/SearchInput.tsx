import React from "react";

type SearchInputProps = {
  searchVal: string;
  setSearchVal: (val: string) => void;
  setCurrentPage: (page: number) => void;
}

const SearchInput = ({ searchVal, setSearchVal, setCurrentPage } : SearchInputProps) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(event.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="w-full md:w-1/3">
      <input
        id="search"
        type="text"
        placeholder="Enter country name..."
        value={searchVal}
        onChange={handleSearchChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"
      />
    </div>
  );
};

export default SearchInput;