import axios from "axios";
import {
  BACKEND_URL,
  ENDPOINTS,
} from "../../../../shared/resources/data/Endpoints";

export const isFirstLogin = async (email: string) => {
  return await axios.post(`${BACKEND_URL}${ENDPOINTS.IsFirstLogin}`, {
    email,
  });
};
