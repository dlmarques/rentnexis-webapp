import Logo from "../../shared/components/Logo/Logo";
import Form from "./components/Form";
import styles from "./styles/signin.module.css";

const SignIn = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Logo width="500px" />
      </div>
      <div className={styles.right}>
        <h3>Welcome back</h3>
        <Form />
      </div>
    </div>
  );
};

export default SignIn;
