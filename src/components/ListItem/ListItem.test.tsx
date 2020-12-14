import { screen, render } from "@testing-library/react";
import ListItem from "./";

const props = {
  icon: <i data-testid="testIcon" />,
  label: "testLabel",
  value: "testValue",
};

function buildListItem() {
  return <ListItem {...props} />;
}

describe("ListItem tests", () => {
  test("render", () => {
    const component = buildListItem();

    render(component);
    const elem = screen.getByTestId("ListItem");

    expect(elem).toBeInTheDocument();
  });

  test("render props", () => {
    const component = buildListItem();

    render(component);
    const icon = screen.getByTestId("testIcon");
    const label = screen.getByText(props.label);
    const value = screen.getByText(props.value);

    expect(icon).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(value).toBeInTheDocument();
  });
});
