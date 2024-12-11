import { SignIn as SignInComponent, useAuth } from "@clerk/clerk-react";
import AuthSkeleton from "../../shared/components/AuthSkeleton/AuthSkeleton";
import { useNavigate } from "@resourge/react-router";
import { RoutePaths } from "../../shared/routes/routes";

const SignIn = () => {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  if (isSignedIn) navigate(RoutePaths.dashboard.path);

  return (
    <AuthSkeleton>
      <SignInComponent signUpUrl="/sign-up" afterSignOutUrl="/sign-in" />
    </AuthSkeleton>
  );
};

export default SignIn;
