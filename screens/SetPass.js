import React from "react";
import { Text, View, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";

export default function SetPass(props) {

    const pressHandler7 = () => {
        Alert.alert("Password Changed Succesfully !","New Password have been updated. please Login with your Account",[
            {
                text:"Okay",
                onPress: ()=> {props.navigation.navigate("Login")}
            }
        ])
    }

  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
      <Text style={styles.head}>Reset Password</Text>
      </View>
      <TextInput
      style={styles.input}
        placeholder="enter new password"
      />
      <TextInput
      style={styles.input}
        placeholder="confirm new password"
      />
      <TouchableOpacity onPress={pressHandler7} style={styles.login_btn}>
        <Text style={{ fontSize: 16 }}>Reset Passowrd</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
  headContainer:{
    padding:40
  },  
  container: {
    padding: 30,
    flex: 1,
    marginTop: 10,
  },
  input: {
    borderColor: "#1560BD",
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    paddingLeft: 10,
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
})