import { build, fake } from "@jackfranklin/test-data-bot";
import { render, screen } from "@testing-library/react";
import CountryInfo from "../../components/CountryInfo";

const countryDataBuilder = build<{
  title: string;
  preTitle: string;
  img: string;
}>({
  fields: {
    title: fake((f) => f.address.country()),
    preTitle: fake((f) => f.address.cityPrefix()),
    img: fake((f) => f.image.imageUrl()),
  },
});

describe("CountryInfo tests", () => {
  test("render", () => {
    const props = countryDataBuilder();
    render(<CountryInfo {...props} />);
    const elem = screen.getByTestId("CountryInfo");

    expect(elem).toBeInTheDocument();
  });
});
