import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  Linking,
  Alert,
  Button,
} from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import HomeScreen from "../screens/Home";
import Signup from "../screens/Signup";
import Login from "../screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AgentLogin from "../screens/Agent";
import CustomerDetail from "../screens/CustomerDetails";
import AddCustomer from "../screens/AddCustomer";
import Help from "../screens/Help";
import ForgotPass from "../screens/ForgotPass";
import SetPass from "../screens/SetPass";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const SideBar = ({ ...props }) => {
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <Image style={styles.image} source={require("../assets/varun.jpg")} />
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="FeedBack"
        onPress={() => Linking.openURL("https://schemaxtech.com/")}
      />
    </DrawerContentScrollView>
  );
};

const FirstStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Customer Details" component={CustomerDetail} />
      <Stack.Screen name="Add Customer" component={AddCustomer} />
      <Stack.Screen name="ForgotPass" component={ForgotPass} />
      <Stack.Screen name="SetPass" component={SetPass} />
    </Stack.Navigator>
  );
};

const SecondStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Customer Details" component={CustomerDetail} />
      <Stack.Screen name="Add Customer" component={AddCustomer} />
    </Stack.Navigator>
  );
};

export default function MyDrawer() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        useLegacyImplementation
        drawerContent={(props) => <SideBar {...props} />}
      >
        <Drawer.Screen
          name="Homes"
          component={FirstStack}
          options={{
            headerTitle: "Varun Finance",
            drawerLabel: "Home",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  Alert.alert("Details", "Agent account details are :");
                }}
              >
                <Text style={{ paddingRight: 20 }}>
                  <MaterialCommunityIcons
                    name="account-circle"
                    size={28}
                    color="black"
                  />
                </Text>
              </TouchableOpacity>
            ),
          }}
        />
        <Drawer.Screen name="Agent" component={AgentLogin} />
        <Drawer.Screen
          name="customers"
          component={SecondStack}
          options={{ headerTitle: "Varun Finance", drawerLabel: "Customer" }}
        />
        <Drawer.Screen name="HelpDesk" component={Help} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    padding: 20,
    marginLeft: 30,
    marginBottom: 40,
    marginTop: 30,
  },
  homeName: {
    fontWeight: "bold",
  },
});
