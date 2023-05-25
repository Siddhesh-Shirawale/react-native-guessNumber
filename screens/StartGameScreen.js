import React, { useState } from "react";

import PrimaryButton from "../components/PrimaryButton";
import { View, TextInput, Text, StyleSheet, Alert } from "react-native";

const StartGameScreen = () => {
  const [enteredNo, setEnteredNo] = useState("");

  const inputHandler = (number) => {
    setEnteredNo(number);
  };
  const resetInput = () => {
    setEnteredNo("");
  };
  const confirmInput = () => {
    const chosenNumber = parseInt(enteredNo);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Number has to be between 1 to 99"),
        [{ text: "Okay", style: "destructive", onPress: resetInput }];
      return;
    } else {
      console.log("Valid number!");
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNo}
        onChangeText={inputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.btnContainer}>
          <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
        </View>
        <View style={styles.btnContainer}>
          <PrimaryButton onPress={confirmInput}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 14,
    padding: 16,
    backgroundColor: "#3b0219",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  btnContainer: {
    flex: 1,
  },
});
