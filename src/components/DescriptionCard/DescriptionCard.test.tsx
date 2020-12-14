import { render, screen } from "@testing-library/react";
import { build, fake } from "@jackfranklin/test-data-bot";
import DescriptionCard from "./";

const listItem = build({
  fields: {
    label: fake((f) => f.lorem.slug()),
    value: fake((f) => f.address.city()),
  },
});

const cardDataBuilder = build<{
  title: string;
  titleImg: string;
  supText: string;
  descriptionList: any[];
}>({
  fields: {
    title: fake((f) => f.address.country()),
    titleImg: fake((f) => f.image.imageUrl()),
    supText: fake((f) => f.address.countryCode()),
    descriptionList: [],
  },
  postBuild: (card) => {
    card.descriptionList = Array(3)
      .fill(undefined)
      .map((_) => listItem());
    return card;
  },
});

describe("DescriptionCard tests", () => {
  test("renders card", () => {
    const props = cardDataBuilder();

    render(<DescriptionCard {...props} />);
    const card = screen.getByTestId("DescriptionCard");
    expect(card).toBeInTheDocument();
  });

  test("card static props", () => {
    const props = cardDataBuilder();

    render(<DescriptionCard {...props} />);

    const title = screen.getByText(props.title);
    const titleImg = screen.getByRole("img");
    const supText = screen.getByText(props.supText);
    const descriptionItems = screen.getAllByTestId("DescriptionCard__ListItem");

    expect(title).toBeInTheDocument();
    expect(titleImg).toHaveAttribute("src", props.titleImg);
    expect(supText).toBeInTheDocument();
    expect(descriptionItems.length).toBe(props.descriptionList.length);
  });

  test("card list item odd/even backgrounds", () => {
    const props = cardDataBuilder();

    render(<DescriptionCard {...props} />);

    const descriptionItems = screen.getAllByTestId("DescriptionCard__ListItem");

    expect(descriptionItems[0]).toHaveClass("bg-gray-50");
    expect(descriptionItems[1]).toHaveClass("bg-white");
    expect(descriptionItems[2]).toHaveClass("bg-gray-50");
  });

  test("custom className", () => {
    const props = cardDataBuilder();
    const customClass = "customClass";

    render(<DescriptionCard {...props} className={customClass} />);

    const card = screen.getByTestId("DescriptionCard");

    expect(card).toHaveClass(customClass);
  });
});
