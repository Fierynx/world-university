type FilterOptionsProps = {
  selectedFilter: "region" | "language" | "independent" | null;
  setSelectedFilter: (filter: "region" | "language" | "independent") => void;
}

const FilterOptions = ({ selectedFilter, setSelectedFilter } : FilterOptionsProps) => {
  return (
    <div className="flex gap-4 items-center w-full md:w-2/3 sm:flex-row max-[480px]:flex-col">
      <label className="flex items-center">
        <input
          type="radio"
          name="filter"
          value="region"
          checked={selectedFilter === "region"}
          onChange={() => setSelectedFilter("region")}
          className="mr-2"
        />
        Filter Region
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          name="filter"
          value="language"
          checked={selectedFilter === "language"}
          onChange={() => setSelectedFilter("language")}
          className="mr-2"
        />
        Filter Language
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          name="filter"
          value="independent"
          checked={selectedFilter === "independent"}
          onChange={() => setSelectedFilter("independent")}
          className="mr-2"
        />
        Filter Status
      </label>
    </div>
  );
};

export default FilterOptions;