import React from "react";
import { Route, Navigate } from "@resourge/react-router";
import { useAuth } from "@clerk/clerk-react";
import { RoutePaths } from "./routes";

const PrivateRoute: React.FC<{ children: React.ReactNode; path: string }> = ({
  children,
  path,
}) => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <Navigate to={RoutePaths.signIn.path} />;
  }

  return <Route path={path}>{children}</Route>;
};

export default PrivateRoute;
