import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

function renderWithRouter(ui: JSX.Element) {
  const Wrapper: React.FC = ({ children }) => <Router>{children}</Router>;

  render(ui, { wrapper: Wrapper });
}

export default renderWithRouter;
