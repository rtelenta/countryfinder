import { gql } from "@apollo/client";

const searchFiltersQuery = gql`
  query {
    Language(orderBy: name_asc, filter: { name_not: "null" }) {
      _id
      name
    }

    Currency(orderBy: name_asc, filter: { name_not: "null" }) {
      _id
      name
    }

    Region(orderBy: name_asc, filter: { name_not: "null" }) {
      _id
      name
    }
  }
`;

export default searchFiltersQuery;
