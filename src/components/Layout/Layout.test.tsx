import { screen } from "@testing-library/react";
import renderWithRouter from "mocks/renderWithRouter";
import Layout from "./";

describe("Layout tests", () => {
  test("renders content", () => {
    const customTestId = "customTestId";

    renderWithRouter(
      <Layout>
        <div data-testid={customTestId} />
      </Layout>
    );
    const layoutElement = screen.getByTestId("Layout");
    const content = screen.getByTestId(customTestId);

    expect(layoutElement).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });
});
