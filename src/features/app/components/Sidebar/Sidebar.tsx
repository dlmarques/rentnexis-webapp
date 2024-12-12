import Logo from "../../../../shared/components/Logo/Logo";
import styles from "./styles/sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <Logo width="125px" />
      </div>
      <div className={styles.nav}>
        <ul>
          <li>Home</li>
          <li>My Properties</li>
          <li>Rented houses</li>
          <li>Messages</li>
          <li>Profile</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
