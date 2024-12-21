import { SignIn as SignInComponent, useAuth } from "@clerk/clerk-react";
import AuthSkeleton from "@components/AuthSkeleton/AuthSkeleton";
import { Navigate } from "@resourge/react-router";
import { RoutePaths } from "@routes/routes";

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
