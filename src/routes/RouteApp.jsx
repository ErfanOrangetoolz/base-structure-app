import { BrowserRouter, Route, Switch } from "react-router-dom";

const RouteApp = () => {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path='/power-dialer' component={null} />
        <Route exact path={"/power-dialer/icons"} component={null} />
        <Route exact component={null} />
      </Switch>
    </BrowserRouter>
  );
};

export default RouteApp;
