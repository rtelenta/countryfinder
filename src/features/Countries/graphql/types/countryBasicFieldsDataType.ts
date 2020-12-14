type countryBasicFieldsDataType = {
  _id: string;
  alpha2Code: string;
  capital: string;
  name: string;
  officialLanguages: {
    name: string;
  }[];
  flag: {
    svgFile: string;
  };
  currencies: {
    name: string;
    symbol: string;
  }[];
  subregion: {
    region: {
      name: string;
    };
  };
};

export default countryBasicFieldsDataType;
