import React from "react";
import Logo from "../Logo/Logo";
import styles from "./styles/auth-skeleton.module.css";

const AuthSkeleton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Logo width="500px" />
      </div>
      <div className={styles.right}>{children}</div>
    </div>
  );
};

export default AuthSkeleton;
