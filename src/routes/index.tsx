import { BrowserRouter as Router, Route } from "react-router-dom";
import Country from "features/Countries/views/Country";
import Countries from "features/Countries/views";
import { routes } from "./routing";

const Routes: React.FC = () => {
  return (
    <Router>
      <Route exact path={routes.home} component={Countries} />
      <Route path={routes.country} component={Country} />
    </Router>
  );
};

export default Routes;
