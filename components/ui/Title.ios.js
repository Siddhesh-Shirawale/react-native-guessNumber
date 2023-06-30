import React from "react";
import { StyleSheet, Text, Platform } from "react-native";
import colors from "../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    // fontWeight: "bold",
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 2 : 0, // or
    // borderWidth: Platform.select({ ios: 0, android: 2 }), // or with 2 files check 2 seperate files in ui/Title , one for ios and another for android
    borderWidth: 0,
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
  },
});
