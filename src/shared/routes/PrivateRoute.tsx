import { Navigate, Route, RouteProps } from "@resourge/react-router";
import React, { useEffect, useState } from "react";
import { RoutePaths } from "./routes";
import { useAuth } from "@clerk/clerk-react";

const PrivateRoute = ({
  children,
  routeProps,
}: {
  children: React.ReactNode;
  routeProps?: RouteProps;
}) => {
  const { getToken } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  const getIsLoggedIn = async () => {
    const response = await fetch("http://localhost:3000/auth/IsLoggedIn", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${await getToken()}`,
      },
    });

    const { data } = await response.json();

    setIsLoggedIn(data.isLoggedIn);
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
