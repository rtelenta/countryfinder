type languageFilterType = {
  officialLanguages_single: {
    name: string;
  };
};

type currencyFilterType = {
  currencies_single: {
    name: string;
  };
};

type regionFilterType = {
  subregion: {
    region: {
      name: string;
    };
  };
};

export type filterVarType =
  | languageFilterType
  | currencyFilterType
  | regionFilterType;

type countryListVarsType = {
  alpha2Code: string;
  name: string;
  filter?: filterVarType[];
};

export default countryListVarsType;
