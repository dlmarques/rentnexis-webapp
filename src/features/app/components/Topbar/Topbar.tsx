import { useUser } from "@clerk/clerk-react";
import styles from "./styles/topbar.module.css";
import { User } from "@nextui-org/react";

const Topbar = () => {
  const { user } = useUser();
  const email = user?.emailAddresses[0].emailAddress;
  return (
    <div className={styles.topbar}>
      <User
        name={user?.username}
        avatarProps={{ name: user?.username || "" }}
        description={email}
      />
    </div>
  );
};

export default Topbar;
