import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import Title from "../components/ui/Title";

import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

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
      <View>
        <Text>Higher or Lower ?</Text>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={() => nextGuessHandler("lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler("greater")}>
            +
          </PrimaryButton>
        </View>
        <View>
          <Text>LOG ROUNDS</Text>
        </View>
      </View>
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
    justifyContent: "center",
    flexDirection: "row",
  },
});
