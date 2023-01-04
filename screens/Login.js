import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Alert,
} from "react-native";
import React from "react";

export default function Login(props) {

  const pressRegister = () => {
    Alert.alert("Successfully Login  !", "Please click ok to Continue", [
      {
        text: "Okay",
        onPress: () => props.navigation.navigate("Customer Details"),
      },
    ]);
  };

  const pressHandler8 = () => {
    props.navigation.navigate("ForgotPass")
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Text style={styles.head}>Login :</Text>
        <View style={styles.inputContainer}>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>Email :</Text>
          <TextInput
            placeholder="enter your mail or phone number"
            style={styles.input}
          />
          <Text style={{ fontSize: 18, marginBottom: 10 }}>Password :</Text>
          <TextInput placeholder="enter your password" style={styles.input} />
          {/* <TouchableOpacity style={styles.login_btn} onPress={pressRegister}>
            <Text style={{fontSize:18}}>Login</Text>
          </TouchableOpacity> */}
          <View>
            <TouchableOpacity style={styles.login_btn} onPress={pressRegister}>
              <Text style={{ fontSize: 16 }}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={pressHandler8}>
              <Text
                style={{
                  marginLeft: 100,
                  marginTop: 15,
                  fontSize: 16,
                  color: "#1560BD",
                }}
              >
                Forgot password ?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  head: {
    fontSize: 40,
    marginTop: 40,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 10,
  },
  container: {
    padding: 30,
    flex: 1,
    marginTop: 125,
  },
  text: {
    fontSize: 15,
    paddingBottom: 10,
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
    paddingLeft: 10,
  },

  login_btn: {
    backgroundColor: "skyblue",
    height: 40,
    width: 250,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginLeft:40
  },
});
