import { gql } from "@apollo/client";

const countryBasicFieldsFragment = gql`
  fragment countryBasicFields on Country {
    _id
    alpha2Code
    capital
    name
    officialLanguages {
      name
    }
    flag {
      svgFile
    }
    currencies {
      name
      symbol
    }
    subregion {
      region {
        name
      }
    }
    callingCodes {
      name
    }
    population
  }
`;

export default countryBasicFieldsFragment;
