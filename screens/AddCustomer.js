import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
  ScrollView,
  Alert
} from "react-native";

export default function AddCustomer(props) {

    const pressRegister = () => {
        Alert.alert(
          "Account Created succefully",
          "Please Login with your registered Customer details",
          [
            {
              text: "Okay",
              onPress: () => props.navigation.navigate("Customer Details"),
            },
          ]
        );
      };

      const pressHandler4 = () => {
        props.navigation.navigate("Customer Details")
      }

  return (
    <ScrollView>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          <Text style={styles.head}>Add Customer</Text>
          <Text style={{ fontSize: 18, marginBottom: 10, marginLeft:20 }}>
            Please fill the following details :
          </Text>
          <View style={styles.inputContainer}>
            <Text style={{ fontSize: 16, marginBottom: 10 }}>
              Customer Name :
            </Text>
            <TextInput placeholder="enter customer Name" style={styles.input} />
            <Text style={{ fontSize: 16, marginBottom: 10 }}>
              Account number :
            </Text>
            <TextInput
              placeholder="enter account number"
              style={styles.input}
              keyboardType="number-pad"
            />
            <Text style={{ fontSize: 16, marginBottom: 10 }}>
              Aadhar Number :
            </Text>
            <TextInput
              placeholder="enter aadhar number"
              style={styles.input}
              keyboardType="number-pad"
            />
            <Text style={{ fontSize: 16, marginBottom: 10 }}>
              Contact Number :
            </Text>
            <TextInput
              placeholder="enter phone number"
              style={styles.input}
              keyboardType="numeric"
            />
            <Text style={{ fontSize: 16, marginBottom: 10 }}>Address :</Text>
            <TextInput placeholder="enter address" style={styles.input} />
            <TouchableOpacity style={styles.login_btn} onPress={pressRegister}>
              <Text style={{ fontSize: 15 }}>Create Customer Account</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", marginTop: 14, marginLeft: 75 }}>
            <Text style={{ marginTop: 3.5, fontSize: 15 }}>
              Already a customer?
            </Text>
            <TouchableOpacity onPress={pressHandler4}>
              <Text style={{ fontSize: 16, color: "#1560BD", marginTop:3.3 }}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  head: {
    fontSize: 38,
    marginTop: 40,
    fontWeight: "bold",
    marginBottom: 20,
    marginLeft:20,
  },
  container: {
    padding: 20,
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
    marginLeft: 60,
  },
});
