import { countryFields } from "../graphql/types/countryDataType";

function countryModel(country: countryFields) {
  const unknownValue = "null";

  const numberWithCommas = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const languages = country?.officialLanguages
    .map((lang) => lang.name)
    .join(", ");

  const currencies = country?.currencies
    .map(
      (cur) =>
        `${cur.name} ${cur.symbol !== unknownValue ? `(${cur.symbol})` : ""}`
    )
    .join(", ");

  const callingCodes = country?.callingCodes
    ?.map((code) => `+${code.name}`)
    .join(", ");

  return {
    id: country?._id,
    name: country?.name,
    flag: country?.flag?.svgFile,
    alpha2Code: country?.alpha2Code,
    capital: country?.capital,
    languages,
    currencies,
    region: country?.subregion?.region?.name,
    demonym: country?.demonym || "",
    callingCodes: callingCodes || "",
    population: country?.population
      ? numberWithCommas(country?.population)
      : "",
  };
}
export default countryModel;
