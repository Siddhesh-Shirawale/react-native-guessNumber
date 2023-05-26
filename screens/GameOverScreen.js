import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../components/constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOver = ({ restartGame }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textMessage}>Game over</Text>
      <PrimaryButton onPress={restartGame}>Restart</PrimaryButton>
    </View>
  );
};

export default GameOver;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  textMessage: {
    color: colors.primary800,
    fontSize: 42,
    fontWeight: "bold",
  },
});
