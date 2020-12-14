import { gql } from "@apollo/client";

const searchFiltersQuery = gql`
  query {
    Language(orderBy: name_asc) {
      _id
      name
    }

    Currency(orderBy: name_asc) {
      _id
      name
    }

    Region(orderBy: name_asc) {
      _id
      name
    }
  }
`;

export default searchFiltersQuery;
