import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";

export default function Signup(props) {

  const pressHandler1 = () => {
    props.navigation.navigate("Home");
  };

  const pressRegister = () => {
    Alert.alert(
      "Account Created succefully",
      "Please Login with your registered account details",
      [
        {
          text: "Okay",
          onPress: () => props.navigation.navigate("Login"),
        },
      ]
    );
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Text style={styles.head}>Sign Up :</Text>
        <Text style={{fontSize:18, marginBottom:10}}>Please fill the following details :</Text>
        <View style={styles.inputContainer}>
          <Text style={{ fontSize: 16, marginBottom: 10 }}>User Name :</Text>
          <TextInput placeholder="enter user Name" style={styles.input} />
          <Text style={{ fontSize: 16, marginBottom: 10 }}>Email :</Text>
          <TextInput
            placeholder="enter your email"
            style={styles.input}
            keyboardType="email-address"
          />
          <Text style={{ fontSize: 16, marginBottom: 10 }}>
            Contact Number :
          </Text>
          <TextInput
            placeholder="enter phone number"
            style={styles.input}
            keyboardType="numeric"
          />
          <Text style={{ fontSize: 16, marginBottom: 10 }}>Password :</Text>
          <TextInput
            placeholder="* must contains a number, a symbol, an alphabet"
            style={styles.input}
          />
          <Text style={{ fontSize: 16, marginBottom: 10 }}>
            Enter password again :
          </Text>
          <TextInput placeholder="* password should be matched" style={styles.input} />
          <TouchableOpacity style={styles.login_btn} onPress={pressRegister}>
            <Text style={{ fontSize: 15 }}>Create an Account</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row', marginTop:14, marginLeft:75}}>
          <Text style={{marginTop:3.5, fontSize:15}}>Already have an Account? </Text>
            <TouchableOpacity onPress={pressHandler1}>
              <Text style={{fontSize:16, color:"#1560BD"}}>Login</Text>
            </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  head: {
    fontSize: 35,
    marginTop: 40,
    fontWeight: "bold",
    marginBottom: 20,
  },
  container: {
    padding: 30,
    flex: 1,
  },
  input: {
    borderColor: "#1560BD",
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    paddingLeft: 10,
  },
  inputContainer: {
    paddingTop: 15,
    paddingRight: 30,
    paddingLeft: 20,
  },
  login_btn: {
    backgroundColor: "skyblue",
    height: 50,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginLeft:60
  },
});
