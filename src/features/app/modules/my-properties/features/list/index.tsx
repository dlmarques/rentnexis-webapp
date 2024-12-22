import TableComponent from "../../../../../../shared/components/Table";
import ListHeader from "./components/ListHeader";
import styles from "./styles/list.module.css";
import PaginationComponent from "../../../../../../shared/components/Pagination";
const MyPropertiesList = () => {
  return (
    <div className={styles["list-container"]}>
      <ListHeader />
      <TableComponent
        columns={[
          { name: "Name", uid: "propertyName" },
          { name: "Description", uid: "description" },
          { name: "Status", uid: "status" },
          { name: "Actions", uid: "actions" },
        ]}
        data={[
          {
            propertyId: "1",
            propertyName: "Cozy Apartment Downtown",
            address: "123 Main St, Cityville, CT 12345",
            description:
              "A beautiful and modern apartment in the heart of downtown.",
            rooms: 2,
            bathrooms: 1,
            ameneties: "WiFi, Heating, Kitchen",
            rules: ["No smoking", "No pets", "No parties"],
            owner_id: 101,
            status: {
              type: 0,
              key: "Rented",
            },
          },
          {
            propertyId: "2",
            propertyName: "Luxury Villa with Pool",
            address: "456 Ocean Drive, Seaside, CA 90210",
            description: "Spacious villa with a private pool and ocean views.",
            rooms: 5,
            bathrooms: 4,
            ameneties: "Pool, WiFi, Parking, Air Conditioning",
            rules: ["No smoking indoors", "No loud music after 10 PM"],
            owner_id: 102,
            status: {
              type: 0,
              key: "Rented",
            },
          },
          {
            propertyId: "3",
            propertyName: "Rustic Cabin in the Woods",
            address: "789 Pine Trail, Forestville, OR 56789",
            description: "A secluded and peaceful cabin surrounded by nature.",
            rooms: 3,
            bathrooms: 2,
            ameneties: "Fireplace, WiFi, Kitchen",
            rules: ["No littering", "Respect wildlife"],
            owner_id: 103,
            status: {
              type: 1,
              key: "Not rented",
            },
          },
          {
            propertyId: "4",
            propertyName: "Modern Loft in the City",
            address: "1010 Skyline Blvd, Metropolis, NY 10101",
            description:
              "Stylish loft with stunning city views and modern amenities.",
            rooms: 1,
            bathrooms: 1,
            ameneties: "WiFi, Kitchen, Gym Access",
            rules: ["No pets", "No parties"],
            owner_id: 104,
            status: {
              type: 0,
              key: "Rented",
            },
          },
          {
            propertyId: "5",
            propertyName: "Beachfront Bungalow",
            address: "202 Coastal Road, Sunnytown, FL 33444",
            description:
              "Relaxing bungalow right on the beach with amazing sunsets.",
            rooms: 2,
            bathrooms: 1,
            ameneties: "Beach Access, WiFi, Air Conditioning",
            rules: ["No smoking indoors", "No glass near the beach"],
            owner_id: 105,
            status: {
              type: 1,
              key: "Not rented",
            },
          },
          {
            propertyId: "6",
            propertyName: "Rustic Cabin in the Woods",
            address: "789 Pine Trail, Forestville, OR 56789",
            description: "A secluded and peaceful cabin surrounded by nature.",
            rooms: 3,
            bathrooms: 2,
            ameneties: "Fireplace, WiFi, Kitchen",
            rules: ["No littering", "Respect wildlife"],
            owner_id: 103,
            status: {
              type: 1,
              key: "Not rented",
            },
          },
        ]}
      />
      <div className={styles["pagination"]}>
        <PaginationComponent
          initalPage={1}
          totalItems={13}
          onChangePage={(page) => console.log(page)}
        />
      </div>
    </div>
  );
};

export default MyPropertiesList;
