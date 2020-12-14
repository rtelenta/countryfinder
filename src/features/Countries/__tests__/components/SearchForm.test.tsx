import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchForm from "../../components/SearchForm";

describe("SearchForm tests", () => {
  test("render", () => {
    render(<SearchForm />);
    const elem = screen.getByTestId("SearchForm");

    expect(elem).toBeInTheDocument();
  });

  test("onSubmit when click button", () => {
    const handleSubmit = jest.fn();
    const country = "Peru";

    render(<SearchForm onSubmit={handleSubmit} />);

    const button = screen.getByRole("button");
    const input = screen.getByRole("textbox");

    userEvent.type(input, country);
    userEvent.click(button);

    expect(handleSubmit).toHaveBeenCalledWith(country);

    expect(handleSubmit).toBeCalledTimes(1);
  });
});
