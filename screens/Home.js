import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Alert
} from "react-native";
import React from "react";

export default function HomeScreen(props) {

  const pressRegister = () => {
    Alert.alert("Successfully Login  !","Please click ok to Continue",[
      {
        text:"Okay",
        onPress: ()=> props.navigation.navigate("Customer Details")
      }
    ])
  }
  
  const pressHandler2 = () => {
    props.navigation.navigate("Signup");
  };

  const pressHandler5 = () => {
    props.navigation.navigate("ForgotPass")
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#1560BD",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <Text style={styles.head}>Welcome to Varun Group</Text>
          <Text style={styles.text}>
            Varun Group is a renowned business conglomerate with successful
            entities spread across Automobile, Auto Financing, Construction, and
            Hospitality & Entertainment industries, in Andhra Pradesh,
            Telangana, and Karnataka.
          </Text>
          <Text style={styles.text}>
            The Group has 241 state-of-the-art Showrooms and 226 modern
            workshops spread across the three states.Its Automobile wing, has
            recorded 20% Y-o-Y growth for the last 10 years and it is one of the
            largest automobile dealers in India, with annual turnover of ₹4,100
            Crores and sales volume of 1,50,000 vehicles every year!
          </Text>
          <Text style={styles.text}>
            The Auto Financing business vertical, reported 40% growth in the
            last 8 years. The Construction and Hospitality verticals, have
            achieved an outstanding business growth within a short span of time.
            Varun Group has achieved remarkable business success and won many
            awards and accolades over the years.
          </Text>
          <Text> </Text>
        </View>
        <View>
          <Text style={styles.login}>Varun Finance Agent Login :</Text>
          <TextInput
            placeholder="enter your email"
            style={styles.input}
          />
          <TextInput
            placeholder="enter your password"
            style={styles.input}
          />
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={styles.login_btn} onPress={pressRegister}>
              <Text style={{ fontSize: 16 }}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={pressHandler5}>
            <Text style={{marginLeft:30, marginTop:6, fontSize:16, color:"#1560BD"}}>Forgot password ?</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row', marginTop:14, marginLeft:70}}>
          <Text style={{marginTop:3.5, fontSize:15}}>Doesn't have an account? </Text>
          <TouchableOpacity onPress={pressHandler2}>
            <Text style={{fontSize:18, color:"#1560BD"}}>SignUp</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  head: {
    fontSize: 40,
    marginTop: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1560BD",
  },
  container: {
    padding: 30,
    flex: 1,
  },
  text: {
    fontSize: 15,
    paddingBottom: 10,
    color: "#555555",
  },
  business: {
    textAlign: "center",
    marginTop: 15,
    fontSize: 35,
    fontWeight: "bold",
    color: "#1560BD",
    letterSpacing: 4,
    marginBottom: 20,
  },
  business_names: {
    padding: 5,
    fontSize: 18,
    color: "darkgreen",
  },
  login: {
    fontSize: 28,
    marginTop: 20,
    marginBottom: 25,
    fontWeight: "bold",
  },
  login_btn: {
    backgroundColor: "skyblue",
    height: 35,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginLeft: 0,
  },

  input: {
    borderColor: "#1560BD",
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    marginBottom: 15,
    paddingLeft: 10,
  },
});
