import { gql } from "@apollo/client";
import countryBasicFieldsFragment from "../fragments/countryBasicFieldsFragment";

const countryQuery = gql`
  query countryQuery($alpha2Code: String) {
    Country(alpha2Code: $alpha2Code) {
      ...countryBasicFields
      demonym
      callingCodes {
        name
      }
      population
    }
  }

  ${countryBasicFieldsFragment}
`;

export default countryQuery;
