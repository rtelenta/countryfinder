import countryBasicFieldsDataType from "./countryBasicFieldsDataType";

type countryListDataType = {
  Country: countryBasicFieldsDataType[];
  totalResults: {
    _id: string;
  }[];
};

export default countryListDataType;
