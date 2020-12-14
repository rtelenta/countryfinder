import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import filtersQuery from "../graphql/queries/filtersQuery";
import filterType from "../graphql/types/filterType";
import searchFiltersType from "../graphql/types/searchFilterTypes";

function useFilters() {
  const { loading, error, data, refetch } = useQuery<searchFiltersType>(
    filtersQuery,
    {}
  );

  const parseToFilterOptions = (items: filterType[]) => {
    const unknownName = "null";

    return items
      .filter((item) => item.name !== unknownName)
      .map((item) => ({ value: item.name, label: item.name }));
  };

  const { currencyOptions, languageOptions, regionOptions } = useMemo(() => {
    if (!data)
      return { currencyOptions: [], languageOptions: [], regionOptions: [] };

    return {
      currencyOptions: parseToFilterOptions(data.Currency),
      languageOptions: parseToFilterOptions(data.Language),
      regionOptions: parseToFilterOptions(data.Region),
    };
  }, [data]);

  return {
    loading,
    error,
    currencyOptions,
    languageOptions,
    regionOptions,
    refetch,
  };
}

export default useFilters;
