import { useQuery } from "@apollo/client";
import { useMemo, useState } from "react";
import { filterCountries } from "../components/CountriesList";
import searchCountriesQuery from "../graphql/queries/searchCountriesQuery";
import countryListDataType from "../graphql/types/countryListDataType";
import countryListVarsType, {
  filterVarType,
} from "../graphql/types/countryListVarsType";
import countryModel from "../models/countryModel";

function useCountries(filters: filterCountries) {
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const queryVars = convertFiltersToQueryVars(filters);
  const { loading, error, data, refetch, fetchMore } = useQuery<
    countryListDataType,
    countryListVarsType
  >(searchCountriesQuery, {
    variables: queryVars,
    onCompleted: () => setHasNextPage(true),
  });

  const countries = useMemo(() => {
    if (!data) return null;

    const parsedCountries = data.Country.map((country) =>
      countryModel(country)
    );

    return parsedCountries;
  }, [data]);

  const totalResults = data?.totalResults.length || 0;
  const showingResults = countries?.length || 0;

  const loadNextPage = () => {
    setLoadingMore(true);
    fetchMore({
      variables: {
        offset: showingResults,
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        const prevData = prevResult as countryListDataType;
        const newData = fetchMoreResult as countryListDataType;

        setLoadingMore(false);
        setHasNextPage(!!newData.Country.length);

        newData.Country = [...prevData.Country, ...newData.Country];

        return newData;
      },
    });
  };

  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  function convertFiltersToQueryVars(filters: filterCountries) {
    const alpha2Code = filters.search.toUpperCase();
    const name = capitalizeFirstLetter(filters.search);

    let filter: filterVarType[] = [];

    if (filters.currency)
      filter.push({
        currencies_single: {
          name: filters.currency,
        },
      });

    if (filters.language)
      filter.push({
        officialLanguages_single: {
          name: filters.language,
        },
      });

    if (filters.region)
      filter.push({
        subregion: {
          region: {
            name: filters.region,
          },
        },
      });

    if (filter.length)
      return {
        alpha2Code,
        name,
        filter,
        offset: 0,
      };

    return {
      alpha2Code,
      name,
      offset: 0,
    };
  }

  return {
    loading,
    error,
    refetch,
    countries,
    totalResults,
    isEmpty: totalResults === 0,
    loadNextPage,
    loadingMore,
    hasNextPage,
    showingResults,
  };
}

export default useCountries;
