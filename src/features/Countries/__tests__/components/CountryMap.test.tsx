import { build, fake } from "@jackfranklin/test-data-bot";
import { render, screen } from "@testing-library/react";
import CountryMap from "../../components/CountryMap";

const countryDataBuilder = build<{
  countryName: string;
}>({
  fields: {
    countryName: fake((f) => f.address.country()),
  },
});

describe("CountryMap tests", () => {
  test("render", () => {
    const props = countryDataBuilder();
    render(<CountryMap {...props} />);
    const elem = screen.getByTestId("CountryMap");

    expect(elem).toBeInTheDocument();
  });
});
