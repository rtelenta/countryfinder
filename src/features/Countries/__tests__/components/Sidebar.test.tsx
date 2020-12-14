import { render, screen } from "@testing-library/react";
import Sidebar from "../../components/Sidebar";

describe("Sidebar tests", () => {
  test("render", () => {
    render(<Sidebar title="title" />);
    const elem = screen.getByTestId("Sidebar");

    expect(elem).toBeInTheDocument();
  });

  test("render title", () => {
    const title = "titleTest";
    render(<Sidebar title={title} />);
    const elem = screen.getByText(title);

    expect(elem).toBeInTheDocument();
  });
});
