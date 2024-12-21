import { useUser } from "@clerk/clerk-react";
import { SaveUserService } from "./services/SaveUserService";
import { useEffect } from "react";
import { UserDataInputDto } from "./models/UserDataDto";
import { useNavigate } from "@resourge/react-router";
import { RoutePaths } from "../../shared/routes/routes";

const SaveUser = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const saveUser = async (email: string) => {
    const role = localStorage.getItem("role") || "";
    const data: UserDataInputDto = {
      clerk_id: user?.id || "",
      username: user?.username || "",
      email,
      role,
    };
    try {
      const saveUserResponse = await SaveUserService.saveUser(data);
      if (saveUserResponse.data.success) {
        navigate(RoutePaths.app.path);
      } else {
        navigate(RoutePaths.oops.path);
      }
    } catch (error: any) {
      navigate(RoutePaths.oops.path);
      throw new Error(error);
    }
  };

  const checkUserFirstLogin = async () => {
    const email = user?.emailAddresses[0].emailAddress;

    if (email) {
      const isFirsLoginResponse = await SaveUserService.isFirstLogin(email);

      if (isFirsLoginResponse.data && isFirsLoginResponse.data.success) {
        const isFirstLogin = isFirsLoginResponse.data.data.isFirstLogin;

        if (isFirstLogin) {
          saveUser(email);
        } else {
          navigate(RoutePaths.app.path);
        }
      } else {
        navigate(RoutePaths.signIn.path);
        throw new Error("Something went wrong");
      }
    }
  };

  useEffect(() => {
    checkUserFirstLogin();
  }, []);

  return <div></div>;
};

export default SaveUser;
