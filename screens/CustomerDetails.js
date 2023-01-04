import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React from "react";

export default function CustomerDetail(props) {
  const pressHandler3 = () => {
    props.navigation.navigate("Add Customer");
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Text style={styles.head}>Please enter Customer details :</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="enter customer mobile number"
            style={styles.input}
            keyboardType="number-pad"
          />
          <Text
            style={{ textAlign: "center", marginTop: -10, marginBottom: 10 }}
          >
            (or)
          </Text>
          <TextInput
            placeholder="enter customer account number "
            style={styles.input}
            keyboardType="number-pad"
          />
          <TouchableOpacity style={styles.login_btn}>
            <Text style={{ fontSize: 18 }}>Get Customer Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.login_btn} onPress={pressHandler3}>
            <Text style={{ fontSize: 18 }}>Add New Customer</Text>
          </TouchableOpacity>
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
    marginBottom: 30,
  },
  container: {
    padding: 30,
    flex: 1,
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
    marginBottom: 25,
    paddingLeft: 10,
  },
  inputContainer: {
    paddingTop: 15,
    paddingRight: 30,
    paddingLeft: 10,
  },

  login_btn: {
    backgroundColor: "skyblue",
    height: 45,
    width: 250,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginLeft: 40,
    marginBottom: 20,
  },
});
