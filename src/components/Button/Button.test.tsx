import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button, { buttonStyles } from "./";

describe("Button tests", () => {
  test("renders content", () => {
    const btnText = "button";

    render(<Button>{btnText}</Button>);
    const btnElement = screen.getByText(btnText);
    expect(btnElement).toBeInTheDocument();
  });

  test("solid variant", () => {
    render(<Button>button</Button>);

    const btnElement = screen.getByRole("button");

    expect(btnElement).toHaveClass(buttonStyles.solid);
  });

  test("outline variant", () => {
    render(<Button variant="outline">button</Button>);

    const btnElement = screen.getByRole("button");

    expect(btnElement).toHaveClass(buttonStyles.outline);
  });

  test("wrong variant", () => {
    render(<Button variant={"wrong" as any}>button</Button>);

    const btnElement = screen.getByRole("button");

    expect(btnElement).toHaveClass(buttonStyles.solid);
  });

  test("call function on click", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>button</Button>);

    const btnElement = screen.getByRole("button");

    userEvent.click(btnElement);

    expect(handleClick).toBeCalledTimes(1);
  });
});
