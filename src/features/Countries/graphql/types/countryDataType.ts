import countryBasicFieldsDataType from "./countryBasicFieldsDataType";

type aditionalFields = {
  demonym?: string;
  callingCodes?: {
    name: string;
  }[];
  population?: number;
};

export type countryFields = countryBasicFieldsDataType & aditionalFields;

type countryDataType = {
  Country: countryFields[];
};

export default countryDataType;
