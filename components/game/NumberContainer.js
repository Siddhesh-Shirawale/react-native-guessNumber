import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import colors from "../constants/colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;

export default NumberContainer;
const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.accent500,
    padding: deviceWidth < 450 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  numberText: {
    color: colors.accent500,
    fontSize: deviceWidth < 450 ? 28 : 36,
    // fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },
});
