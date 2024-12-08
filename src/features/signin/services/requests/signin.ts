import axios from "axios";
import { ENDPOINTS } from "../../../../shared/resources/data/Endpoints";
import { SignInDto } from "../../models/SignInDto";

export const SignIn = async (data: SignInDto) => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}${ENDPOINTS.SignIn}`,
    data
  );

  return response.data;
};
