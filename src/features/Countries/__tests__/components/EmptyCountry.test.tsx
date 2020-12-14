import { screen } from "@testing-library/react";
import renderWithRouter from "__mocks__/renderWithRouter";
import EmptyCountry from "../../components/EmptyCountry";

describe("EmptyCountry tests", () => {
  test("render", () => {
    renderWithRouter(<EmptyCountry />);
    const elem = screen.getByTestId("EmptyCountry");

    expect(elem).toBeInTheDocument();
  });
});
