import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from "@react-navigation/drawer";
  
  import { View, Image, StyleSheet, Linking } from "react-native";
  
  import { MaterialIcons } from '@expo/vector-icons';
  
  import Home from "../screens/Home";
  import SignUp from "../screens/Signup";
  import Login from "../screens/Login";
  import About from "../screens/About";
  import Help from "../screens/Help";
  import Success from "../screens/Success";
  
  const Drawer = createDrawerNavigator();
  
  const SideBar = ({...props}) => {
      return(
          <DrawerContentScrollView {...props}>
              <View>
                  <Image style={styles.image} source={require('../assets/varun.jpg')} />
              </View>
              <DrawerItemList {...props} />
              <DrawerItem
                  label="FeedBack"
                  onPress={()=> Linking.openURL('https://schemaxtech.com/')}
              />
          </DrawerContentScrollView>
      )
  }
  
  export default function MyDrawer() {
    return (
      <Drawer.Navigator
      useLegacyImplementation
          drawerContent={
              (props) => <SideBar {...props} />
          }
      >
        <Drawer.Screen name="Home" component={Home} options={{headerTitle:"Varun Finance", headerStyle:{height:110} }}/>
        <Drawer.Screen name="Signup" component={SignUp} options={{headerTitle:"Signup Form"}} />
        <Drawer.Screen name="Login" component={Login} options={{headerTitle:"Login Form"}} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Help" component={Help} />
      </Drawer.Navigator>
    );
  }
  
  const styles = StyleSheet.create({
      image:{
          padding:20,
          marginLeft:30,
          marginBottom:40,
          marginTop:30,
      },
      homeName:{
          fontWeight:'bold'
      }
  })