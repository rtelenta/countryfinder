import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import countryQuery from "../graphql/queries/countryQuery";
import countryDataType from "../graphql/types/countryDataType";
import countryVarsType from "../graphql/types/countryVarsType";
import countryModel from "../models/countryModel";

function useCountry(alpha2Code: string) {
  const { loading, error, data, refetch } = useQuery<
    countryDataType,
    countryVarsType
  >(countryQuery, { variables: { alpha2Code } });

  const country = useMemo(() => {
    if (!data) return null;

    return countryModel(data.Country[0]);
  }, [data]);

  return { loading, error, country, refetch };
}

export default useCountry;
