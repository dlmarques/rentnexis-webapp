import Card from "../../../../../components/Card";
import { faFileContract, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/listHeader.module.css";
const ListHeader = () => {
  return (
    <div className={styles.header}>
      <Card
        cardWidth="30vw"
        header={<FontAwesomeIcon icon={faHouse} size="3x" color="#304c57" />}
        body={
          <div className="flex items-end gap-[8px]">
            <p
              style={{ fontSize: "32px", fontWeight: "700", color: "#304c57" }}
            >
              10
            </p>
            <p style={{ paddingBottom: "8px" }}>Active properties</p>
          </div>
        }
      />
      <Card
        cardWidth="30vw"
        header={
          <FontAwesomeIcon icon={faFileContract} size="3x" color="#304c57" />
        }
        body={
          <div className="flex items-end gap-[8px]">
            <p
              style={{ fontSize: "32px", fontWeight: "700", color: "#304c57" }}
            >
              9
            </p>
            <p style={{ paddingBottom: "8px" }}>Active leases</p>
          </div>
        }
      />
    </div>
  );
};

export default ListHeader;
