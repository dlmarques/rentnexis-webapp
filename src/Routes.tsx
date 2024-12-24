import { Redirect, Route, Switch } from "@resourge/react-router";
import { RoutePaths } from "./shared/routes/routes";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Oops from "./pages/Oops";
import SaveUserPage from "./pages/SaveUser";
import PrivateRoute from "./shared/routes/PrivateRoute";
import AppPage from "./pages/AppPage";
import { Suspense } from "react";

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <PrivateRoute path={RoutePaths.app.path}>
          <AppPage />
        </PrivateRoute>
        <PrivateRoute path={RoutePaths.saveUserCallback.path}>
          <SaveUserPage />
        </PrivateRoute>
        <Route path={RoutePaths.signIn.path}>
          <SignIn />
        </Route>
        <Route path={RoutePaths.signUp.path}>
          <SignUp />
        </Route>
        <Route path={RoutePaths.oops.path}>
          <Oops />
        </Route>

        <Redirect from="" to={RoutePaths.saveUserCallback.path} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
