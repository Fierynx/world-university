import React, { RefObject } from "react";

type FilterDropdownProps = {
  selectedFilter: "region" | "language" | "independent";
  dropdownOptions: string[];
  handleFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  filterRef: RefObject<HTMLSelectElement>;
}

const FilterDropdown = ({ selectedFilter, dropdownOptions, handleFilterChange, filterRef } : FilterDropdownProps) => {
  return (
    <div className="w-full md:w-1/3">
      <select
        id="filter"
        name="filter"
        onChange={handleFilterChange}
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"
        ref={filterRef}
      >
        <option value="" className="bg-gray-300">Select {selectedFilter.charAt(0).toUpperCase() + selectedFilter.slice(1)}</option>
        {dropdownOptions.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;