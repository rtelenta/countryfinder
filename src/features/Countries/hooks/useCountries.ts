import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import { filterCountries } from "../components/CountriesList";
import searchCountriesQuery from "../graphql/queries/searchCountriesQuery";
import countryListDataType from "../graphql/types/countryListDataType";
import countryListVarsType, {
  filterVarType,
} from "../graphql/types/countryListVarsType";
import countryModel from "../models/countryModel";

function useCountries(filters: filterCountries) {
  const queryVars = convertFiltersToQueryVars(filters);
  const { loading, error, data, refetch } = useQuery<
    countryListDataType,
    countryListVarsType
  >(searchCountriesQuery, { variables: queryVars });

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
      };

    return {
      alpha2Code,
      name,
    };
  }

  const countries = useMemo(() => {
    if (!data) return null;

    const unknownValue = "null";
    const parsedCountries = data.Country.filter(
      (country) => country.name !== unknownValue
    ).map((country) => countryModel(country));

    return parsedCountries;
  }, [data]);

  const totalResults = countries?.length || 0;

  return {
    loading,
    error,
    refetch,
    countries,
    totalResults,
    isEmpty: totalResults === 0,
  };
}

export default useCountries;
