import { Route, Switch } from "@resourge/react-router";
import { RoutePaths } from "./shared/routes/routes";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Oops from "./pages/Oops";
import SaveUserPage from "./pages/SaveUser";
import PrivateRoute from "./shared/routes/PrivateRoute";
import AppPage from "./pages/AppPage";

const Routes = () => {
  return (
    <Switch>
      {/* Specific Private Routes */}
      <PrivateRoute path={RoutePaths.dashboard.path}>
        <AppPage />
      </PrivateRoute>
      <PrivateRoute path={RoutePaths.saveUserCallback.path}>
        <SaveUserPage />
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
    </Switch>
  );
};

export default Routes;
