import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Country from "features/Countries/views/Country";
import Countries from "features/Countries/views";
import { routes } from "./routing";
import Layout from "components/Layout";

const Routes: React.FC = () => {
  const basename = process.env.PUBLIC_URL;
  return (
    <Router basename={basename}>
      <Layout>
        <Switch>
          <Route exact path={routes.home} component={Countries} />
          <Route path={routes.country} component={Country} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;
