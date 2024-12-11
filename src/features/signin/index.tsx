import { SignIn as SignInComponent } from "@clerk/clerk-react";
import AuthSkeleton from "../../shared/components/AuthSkeleton/AuthSkeleton";

const SignIn = () => {
  return (
    <AuthSkeleton>
      <SignInComponent signUpUrl="/sign-up" afterSignOutUrl="/sign-in" />
    </AuthSkeleton>
  );
};

export default SignIn;
