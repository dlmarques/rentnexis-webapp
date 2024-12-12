import { useAuth } from "@clerk/clerk-react";
import { Button } from "@nextui-org/react";
import React from "react";

const Dashboard = () => {
  const { signOut } = useAuth();
  return (
    <div>
      <Button onClick={() => signOut()}>Logout</Button>
    </div>
  );
};

export default Dashboard;
