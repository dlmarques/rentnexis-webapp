import { Navigate, Route, RouteProps } from "@resourge/react-router";
import React, { useEffect, useState } from "react";
import { RoutePaths } from "./routes";

const PrivateRoute = ({
  children,
  routeProps,
}: {
  children: React.ReactNode;
  routeProps?: RouteProps;
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const getIsLoggedIn = async () => {
    const response = await fetch(
      "https://backend-qzrd.onrender.com/auth/IsLoggedIn",
      { credentials: "include" }
    );

    console.log(response);
  };

  useEffect(() => {
    getIsLoggedIn();
  }, []);

  return isLoggedIn ? (
    <Route {...routeProps} children={children} />
  ) : (
    <Navigate to={RoutePaths.signIn.path} />
  );
};

export default PrivateRoute;
