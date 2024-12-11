import { Route, RouteProps, useNavigate } from "@resourge/react-router";
import React from "react";
import { RoutePaths } from "./routes";
import { useAuth } from "@clerk/clerk-react";

const PrivateRoute = ({
  children,
  routeProps,
}: {
  children: React.ReactNode;
  routeProps?: RouteProps;
}) => {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  if (!isSignedIn) navigate(RoutePaths.signIn.path);

  return <Route {...routeProps} children={children} />;
};

export default PrivateRoute;
