import React, { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import { View, TextInput, Text, StyleSheet, Alert } from "react-native";
import colors from "../components/constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const StartGameScreen = ({ onPickNumber }) => {
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
    }
    onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.screenContainer}>
      <Title>Guess my number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
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
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: colors.accent500,
    borderBottomWidth: 2,
    color: colors.accent500,
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
