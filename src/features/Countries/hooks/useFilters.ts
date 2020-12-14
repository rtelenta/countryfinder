import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import filtersQuery from "../graphql/queries/filtersQuery";
import filterType from "../graphql/types/filterType";
import searchFilterDataTypes from "../graphql/types/searchFilterDataTypes";

function useFilters() {
  const { loading, error, data, refetch } = useQuery<searchFilterDataTypes>(
    filtersQuery,
    {}
  );

  const parseToFilterOptions = (items: filterType[]) => {
    return items.map((item) => ({ value: item.name, label: item.name }));
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
