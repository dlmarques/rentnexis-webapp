import { path, SetupPaths } from "@resourge/react-router";

export const RoutePaths = SetupPaths({
  signIn: path("sign-in"),
  signUp: path("sign-up"),
  app: path("app").routes({
    dashboard: path("dashboard"),
    myProperties: path("my-properties").routes({
      list: path("list"),
    }),
    rentedHouses: path("rented-houses"),
    messages: path("messages"),
    profile: path("profile"),
  }),
  saveUserCallback: path("save-user"),
  oops: path("oops"),
});
