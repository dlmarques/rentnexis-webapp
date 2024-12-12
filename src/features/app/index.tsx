import { useAuth } from "@clerk/clerk-react";
import { Button } from "@nextui-org/react";
import Layout from "./layouts/Layout";

const App = () => {
  const { signOut } = useAuth();
  return (
    <Layout>
      <Button onClick={() => signOut()}>Logout</Button>
    </Layout>
  );
};

export default App;
