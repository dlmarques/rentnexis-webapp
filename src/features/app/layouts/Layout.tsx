import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";
import styles from "../styles/layout.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div>
        <Topbar />
        <div className={styles.main}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
