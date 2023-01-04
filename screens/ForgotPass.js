import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert
} from "react-native";

export default function ForgotPass(props) {
  const pressHandler6 = () => {
    Alert.alert("Sent !","Reset mail have been sent successfully.",[
      {
        text:"okay",
        onPress:()=>props.navigation.navigate("SetPass")
      }
    ])
  };

  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
      <Text style={styles.head}>Reset Password</Text>
      </View>
      <Text style={styles.text}>
        Please enter registered email address or phone number :
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email address or phone number"
      />
      <TouchableOpacity style={styles.login_btn} onPress={pressHandler6}>
        <Text style={{ fontSize: 16 }}>Send Link</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: "#1560BD",
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    paddingLeft: 10,
  },
  head: {
    fontSize: 40,
    marginTop: 40,
    fontWeight: "bold",
    marginBottom: 10,
    borderBottomWidth:1,
    borderBottomColor:"#1560BD",
    paddingBottom:5,
    paddingLeft:10,
  },
  container: {
    padding: 30,
    flex: 1,
    marginTop: 10,
  },
  text: {
    padding: 10,
    fontSize: 14,
    marginBottom: 10,
    marginTop:-20
  },
  login_btn: {
    backgroundColor: "skyblue",
    height: 40,
    width: 250,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginLeft: 55,
  },
  headContainer:{
    padding:40
  }
});
