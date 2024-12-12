import { Redirect, Route, Switch } from "@resourge/react-router";
import { RoutePaths } from "./shared/routes/routes";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import DashboardPage from "./pages/Dashboard";
import Oops from "./pages/Oops";
import SaveUserPage from "./pages/SaveUser";
import PrivateRoute from "./shared/routes/PrivateRoute";

const Routes = () => {
  return (
    <Switch>
      {/* Specific Private Routes */}
      <PrivateRoute path={RoutePaths.saveUserCallback.path}>
        <SaveUserPage />
      </PrivateRoute>
      <PrivateRoute path={RoutePaths.dashboard.path}>
        <DashboardPage />
      </PrivateRoute>

      {/* Public Routes */}
      <Route path={RoutePaths.signIn.path}>
        <SignIn />
      </Route>
      <Route path={RoutePaths.signUp.path}>
        <SignUp />
      </Route>

      {/* General Route */}
      <Route path={RoutePaths.oops.path}>
        <Oops />
      </Route>

      {/* Default Redirect */}
      <Redirect to={RoutePaths.signIn.path} from={""} />
    </Switch>
  );
};

export default Routes;
