import { gql } from "@apollo/client";
import countryBasicFieldsFragment from "../fragments/countryBasicFieldsFragment";

const searchCountriesQuery = gql`
  query searchCountriesQuery(
    $alpha2Code: String
    $name: String
    $filter: [_CountryFilter!]
  ) {
    Country(
      filter: {
        OR: [
          { alpha2Code_contains: $alpha2Code, AND: $filter }
          { name_starts_with: $name, AND: $filter }
        ]
      }
      orderBy: name_asc
    ) {
      ...countryBasicFields
    }
  }

  ${countryBasicFieldsFragment}
`;

export default searchCountriesQuery;
