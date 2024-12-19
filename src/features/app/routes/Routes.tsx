import { Redirect, Route, Switch } from "@resourge/react-router";
import { RoutePaths } from "../../../shared/routes/routes";
import Dashboard from "../modules/dashboard";
import MyProperties from "../modules/my-properties";
import RentedHouses from "../modules/rented-houses";
import Messages from "../modules/messages";
import Profile from "../modules/profile";

const Routes = () => {
  return (
    <Switch>
      <Route path={RoutePaths.app.dashboard.path}>
        <Dashboard />
      </Route>
      <Route path={RoutePaths.app.myProperties.path}>
        <MyProperties />
      </Route>
      <Route path={RoutePaths.app.rentedHouses.path}>
        <RentedHouses />
      </Route>
      <Route path={RoutePaths.app.messages.path}>
        <Messages />
      </Route>
      <Route path={RoutePaths.app.profile.path}>
        <Profile />
      </Route>
      <Redirect from={RoutePaths.app.path} to={RoutePaths.app.dashboard.path} />
    </Switch>
  );
};

export default Routes;
