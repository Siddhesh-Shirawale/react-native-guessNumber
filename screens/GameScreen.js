import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import Title from "../components/ui/Title";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

let minBoundrey = 1;
let maxBoundrey = 100;

const generateRandomNum = (min, max, exclude) => {
  const rndmNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndmNum === exclude) {
    return generateRandomNum(min, max, exclude);
  } else {
    return rndmNum;
  }
};

const GameScreen = ({ userNumber, gameOverHandler }) => {
  const initialGuess = generateRandomNum(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Dont lie", "You know that this is wrong", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    } else if (direction === "lower") {
      maxBoundrey = currentGuess;
    } else {
      minBoundrey = currentGuess + 1;
    }
    const newRndmNumber = generateRandomNum(
      minBoundrey,
      maxBoundrey,
      currentGuess
    );

    setCurrentGuess(newRndmNumber);
  };

  useEffect(() => {
    if (currentGuess === userNumber) {
      gameOverHandler();
    }
  }, [currentGuess, userNumber, gameOverHandler]);

  return (
    <View style={styles.screen}>
      <Title>Opponent's guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower ?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("greater")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
        {/* <View>
          <Text>LOG ROUNDS</Text>
        </View> */}
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonContainer: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  instructionText: {
    marginBottom: 12,
  },
});
