import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import React from "react";
import Unorderedlist from "react-native-unordered-list";

export default function About({ navigation }) {
  const presshandler = () => {
    navigation.navigate("Signup");
  };

  return (
    // <View>
    //   <ImageBackground>
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{borderBottomWidth:1, borderBottomColor:'green'}}>
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
          <Text>    </Text>
          
        </View>
        <View style={{borderBottomWidth:1, borderBottomColor:'black'}}>
          <Text style={styles.business}>OUR BUSINESS</Text>
          <Unorderedlist
            style={{ marginTop: 7 }}
            color="black"
            bulletUnicode={0x29bf}
          >
            <Text style={styles.business_names}>AUTOMATIVE FINANCE</Text>
          </Unorderedlist>
          <Unorderedlist
            style={{ marginTop: 7 }}
            color="black"
            bulletUnicode={0x29bf}
          >
            <Text style={styles.business_names}>AUTOMATIVE RETAIL</Text>
          </Unorderedlist>
          <Unorderedlist
            style={{ marginTop: 7 }}
            color="black"
            bulletUnicode={0x29bf}
          >
            <Text style={styles.business_names}>INFRASTRUCTURE</Text>
          </Unorderedlist>
          <Unorderedlist
            style={{ marginTop: 7 }}
            color="black"
            bulletUnicode={0x29bf}
          >
            <View style={{marginBottom:15}}><Text style={styles.business_names}>HOSPITALITY</Text></View>
          </Unorderedlist>
        </View>
      </View>
    </ScrollView>
    //   </ImageBackground>
    // </View>
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
});
