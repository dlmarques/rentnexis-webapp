import { SignUp as SignUpComponent, useAuth } from "@clerk/clerk-react";
import AuthSkeleton from "../../shared/components/AuthSkeleton/AuthSkeleton";
import { useNavigate } from "@resourge/react-router";
import { checkExistsRole } from "./utils/checkRole";
import { RoutePaths } from "../../shared/routes/routes";

const SignUp = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useAuth();

  if (isSignedIn) navigate(RoutePaths.dashboard.path);

  if (!checkExistsRole()) {
    navigate(RoutePaths.oops.path);
  }

  return (
    <AuthSkeleton>
      <SignUpComponent signInUrl="/sign-in" />
    </AuthSkeleton>
  );
};

export default SignUp;
