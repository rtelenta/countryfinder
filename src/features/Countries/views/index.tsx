import SearchForm from "../components/SearchForm";
import Filters, { filtersOptionsType } from "../components/Filters";
import React, { useState } from "react";
import CountriesList, { filterCountries } from "../components/CountriesList";

const Countries: React.FC = () => {
  const [filters, setFilters] = useState<filterCountries>({
    search: "",
    language: null,
    currency: null,
    region: null,
  });

  const handleSubmit = (search: string) => {
    setFilters((prevFilters) => ({ ...prevFilters, search }));
  };

  const handleChange = (filters: filtersOptionsType) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...filters }));
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />

      <div className="md:flex">
        <Filters onChange={handleChange} />

        <CountriesList filters={filters} />
      </div>
    </div>
  );
};

export default Countries;
