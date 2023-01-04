import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Help = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Send Your Issues to </Text>
      <View style={styles.mailHead}>
        <Entypo style={styles.mail} name="mail" size={24} color="#1560BD" />
        <Text style={styles.mailText}>support@schemaxtech.com</Text>
      </View>
      <View style={styles.mailHead}>
        <FontAwesome style={styles.phone} name="phone" size={24} color="#1560BD" />
        <Text style={styles.phoneText}>+91-90300069351</Text>
      </View>
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  head: {
    padding: 20,
    fontSize: 40,
    marginTop: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1560BD",
    borderBottomWidth: 1,
  },
  mail: {
    marginLeft: 50,
    marginTop: 5,
  },
  mailText: {
    fontSize: 20,
    marginLeft: 20,
  },
  mailHead: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  phone:{
    marginLeft: 55,
    marginTop: 25,
  },
  phoneText:{
    fontSize: 20,
    marginLeft: 20,
    marginTop:25
  }
});
