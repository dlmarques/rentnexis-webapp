import { Redirect, Route, Switch } from "@resourge/react-router";
import { RoutePaths } from "@routes/routes";
import MyPropertiesList from "./features/list";

const MyProperties = () => {
  return (
    <Switch>
      <Route exact path={RoutePaths.app.myProperties.list.path}>
        <MyPropertiesList />
      </Route>
      <Redirect
        from={RoutePaths.app.myProperties.path}
        to={RoutePaths.app.myProperties.list.path}
      />
    </Switch>
  );
};

export default MyProperties;
