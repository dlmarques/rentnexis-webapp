import axios from "axios";
import Routes from "./Routes";
import { useAuth } from "@clerk/clerk-react";

const App = () => {
  const { getToken } = useAuth();

  axios.interceptors.request.use(async function (config) {
    const token = await getToken();
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  return <Routes />;
};

export default App;
