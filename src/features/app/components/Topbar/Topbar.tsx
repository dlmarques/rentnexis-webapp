import { useAuth, useUser } from "@clerk/clerk-react";
import styles from "./styles/topbar.module.css";
import { User } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

const Topbar = () => {
  const { user } = useUser();
  const { signOut } = useAuth();
  const email = user?.emailAddresses[0].emailAddress;
  return (
    <div className={styles.topbar}>
      <User
        name={user?.username}
        avatarProps={{ name: user?.username || "" }}
        description={email}
      />
      <FontAwesomeIcon
        icon={faSignOut}
        size="lg"
        onClick={() => signOut()}
        style={{ cursor: "pointer", color: "#304c57" }}
      />
    </div>
  );
};

export default Topbar;
