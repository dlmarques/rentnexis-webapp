import axios from "axios";
import {
  BACKEND_URL,
  ENDPOINTS,
} from "../../../../shared/resources/data/Endpoints";
import { UserDataInputDto } from "../../models/UserDataDto";

export const saveUser = async (userData: UserDataInputDto) => {
  return await axios.post(`${BACKEND_URL}${ENDPOINTS.SaveUser}`, userData);
};