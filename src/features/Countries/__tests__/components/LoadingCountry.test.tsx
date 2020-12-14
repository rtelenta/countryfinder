import { render, screen } from "@testing-library/react";
import LoadingCountry from "../../components/LoadingCountry";

describe("LoadingCountry tests", () => {
  test("render", () => {
    render(<LoadingCountry />);
    const elem = screen.getByTestId("LoadingCountry");

    expect(elem).toBeInTheDocument();
  });
});
