import AuthSkeleton from "../../shared/components/AuthSkeleton/AuthSkeleton";
import Form from "./components/Form";

const SignIn = () => {
  return (
    <AuthSkeleton>
      <h3 style={{ color: "#304c57", fontWeight: "500" }}>Welcome back</h3>
      <Form />
    </AuthSkeleton>
  );
};

export default SignIn;
