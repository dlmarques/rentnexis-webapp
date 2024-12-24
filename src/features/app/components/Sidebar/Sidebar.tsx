import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
} from "@nextui-org/react";
import Logo from "@components/Logo/Logo";
import styles from "./styles/sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSidebarLinks } from "../../hooks/useSidebarLinks";
import { useNavigate } from "@resourge/react-router";
import { RoutePaths } from "../../../../shared/routes/routes";

const Sidebar = () => {
  const { links } = useSidebarLinks();
  const navigate = useNavigate();
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <Logo width="125px" />
      </div>
      <div className={styles["nav-button"]}>
        <Dropdown placement="right">
          <DropdownTrigger>
            <Button
              style={{
                backgroundColor: "#fff",
                color: "#304c57",
                fontWeight: "700",
                width: "50%",
              }}
            >
              <FontAwesomeIcon icon={faPlus} />
              New
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem
              key="property"
              onClick={() => navigate(RoutePaths.app.myProperties.create.path)}
            >
              New Property
            </DropdownItem>
            <DropdownItem key="lease">Start a lease</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className={styles.nav}>
        <ul>
          {links &&
            links.map((link, index) => {
              return (
                <li
                  key={`sidebar-item-${index}`}
                  onClick={() => navigate(link.href)}
                >
                  {link.label}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
