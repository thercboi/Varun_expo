import { NavigationContainer } from "@react-navigation/native";

import MyDrawer from "./routes/drawer";

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
