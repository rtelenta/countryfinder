import { render, screen } from "@testing-library/react";
import Placeholder from "./";

describe("Placeholder tests", () => {
  test("render", () => {
    render(<Placeholder />);
    const elem = screen.getByTestId("Placeholder");

    expect(elem).toBeInTheDocument();
  });

  test("custom className", () => {
    const customClass = "customClass";
    render(<Placeholder className={customClass} />);

    const elem = screen.getByTestId("Placeholder");

    expect(elem).toHaveClass(customClass);
  });
});
