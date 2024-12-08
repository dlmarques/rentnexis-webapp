import { Button, CircularProgress, Input } from "@nextui-org/react";
import formStyles from "../../../shared/styles/form.module.css";
import PasswordInput from "../../../shared/components/PasswordInput/PasswordInput";
import { useMutation } from "react-query";
import { SignInDto } from "../models/SignInDto";
import { SignInService } from "../services/SignInService";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const { mutate, isError, isLoading, error } = useMutation((data: SignInDto) =>
    SignInService.SignIn(data)
  );

  const onSubmit = handleSubmit((data) => {
    const signInData = data as SignInDto;
    mutate(signInData);
  });

  if (isError) {
    const _error = error as { [key: string]: any };
    if (_error && _error.response && _error.response.data)
      toast.error(`Something went wrong ${_error.response.data.message}`);
  }

  return (
    <div className={formStyles["form-container"]}>
      <Input
        label="Username"
        placeholder="Enter your username"
        color={isError ? "danger" : "default"}
        {...register("username")}
      />
      <PasswordInput inputFormProps={register("password")} isError={isError} />
      <Button className="button-primary" onClick={() => onSubmit()}>
        {isLoading ? <CircularProgress size="sm" color="default" /> : "Sign In"}
      </Button>
      <div>
        <a href="#">
          <p style={{ color: "#304c57" }}>Forgot password?</p>
        </a>
        <a href="#">
          <p style={{ color: "#304c57" }}>Create an account</p>
        </a>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Form;
