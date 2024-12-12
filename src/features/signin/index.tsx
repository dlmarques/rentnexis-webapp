import { SignIn as SignInComponent, useAuth } from "@clerk/clerk-react";
import AuthSkeleton from "../../shared/components/AuthSkeleton/AuthSkeleton";
import { Navigate } from "@resourge/react-router";
import { RoutePaths } from "../../shared/routes/routes";

const SignIn = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Navigate to={RoutePaths.saveUserCallback.path} />;
  }

  return (
    <AuthSkeleton>
      <SignInComponent
        signUpUrl={RoutePaths.signUp.path}
        afterSignOutUrl={RoutePaths.signIn.path}
      />
    </AuthSkeleton>
  );
};

export default SignIn;
