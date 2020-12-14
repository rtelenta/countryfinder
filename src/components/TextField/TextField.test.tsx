import { render, screen } from "@testing-library/react";
import TextField from "./";

describe("TextField tests", () => {
  test("render", () => {
    render(<TextField />);
    const elem = screen.getByRole("textbox");

    expect(elem).toBeInTheDocument();
  });
});
