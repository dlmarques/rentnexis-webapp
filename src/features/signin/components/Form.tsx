import { Button, Input } from "@nextui-org/react";
import styles from "../styles/form.module.css";
import PasswordInput from "../../../shared/components/PasswordInput/PasswordInput";
const Form = () => {
  return (
    <div className={styles["form-container"]}>
      <Input label="Username" placeholder="Enter your username" />
      <PasswordInput />
      <Button className="button-primary">Sign In</Button>
      <div className={styles["form-links"]}>
        <a href="#">
          <p>Forgot password?</p>
        </a>
        <a href="#">
          <p>Create an account</p>
        </a>
      </div>
    </div>
  );
};

export default Form;
