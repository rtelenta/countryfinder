import { gql } from "@apollo/client";
import countryBasicFieldsFragment from "../fragments/countryBasicFieldsFragment";

const searchCountriesQuery = gql`
  query searchCountriesQuery(
    $alpha2Code: String
    $name: String
    $filter: [_CountryFilter!]
    $offset: Int
  ) {
    totalResults: Country(
      filter: {
        name_not: "null"
        OR: [
          { alpha2Code_contains: $alpha2Code, AND: $filter }
          { name_starts_with: $name, AND: $filter }
        ]
      }
    ) {
      _id
    }

    Country(
      filter: {
        name_not: "null"
        OR: [
          { alpha2Code_contains: $alpha2Code, AND: $filter }
          { name_starts_with: $name, AND: $filter }
        ]
      }
      orderBy: name_asc
      offset: $offset
      first: 20
    ) {
      ...countryBasicFields
    }
  }

  ${countryBasicFieldsFragment}
`;

export default searchCountriesQuery;
