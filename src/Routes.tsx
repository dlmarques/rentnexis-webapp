import { Route, Switch } from "@resourge/react-router";
import { RoutePaths } from "./shared/routes/routes";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./shared/routes/PrivateRoute";
import Dashboard from "./pages/Dashboard";

const Routes = () => {
  return (
    <Switch>
      <Route path={RoutePaths.signIn.path}>
        <SignIn />
      </Route>
      <Route path={RoutePaths.signUp.path}>
        <SignUp />
      </Route>
      <PrivateRoute routeProps={{ path: RoutePaths.dashboard.path }}>
        <Dashboard />
      </PrivateRoute>
    </Switch>
  );
};

export default Routes;
