import { path, SetupPaths } from "@resourge/react-router";

export const RoutePaths = SetupPaths({
  signIn: path("sign-in"),
  signUp: path("sign-up"),
  dashboard: path("dashboard"),
  saveUserCallback: path("save-user"),
  oops: path("oops"),
});
