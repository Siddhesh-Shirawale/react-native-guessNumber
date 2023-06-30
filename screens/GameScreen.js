import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  useWindowDimensions,
} from "react-native";
import Title from "../components/ui/Title";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

import { FlatList } from "react-native";
import GuessLog from "../components/game/GuessLog";

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

const GameScreen = ({ userNumber, gameOverHandler, increaseRounds }) => {
  const initialGuess = generateRandomNum(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  const { width, height } = useWindowDimensions();

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Dont lie", "You know that this is wrong", [
        { text: "Sorry", style: "cancel" },
      ]);
      increaseRounds();
      return;
    } else if (direction === "lower") {
      maxBoundrey = currentGuess;
      increaseRounds();
    } else {
      minBoundrey = currentGuess + 1;
      increaseRounds();
    }
    const newRndmNumber = generateRandomNum(
      minBoundrey,
      maxBoundrey,
      currentGuess
    );

    setCurrentGuess(newRndmNumber);
    setGuessRounds((prev) => [newRndmNumber, ...prev]);
  };

  useEffect(() => {
    if (currentGuess === userNumber) {
      gameOverHandler();
    }
  }, [currentGuess, userNumber, gameOverHandler]);

  useEffect(() => {
    minBoundrey = 1;
    maxBoundrey = 100;
  }, []);

  const guessRoundListLength = guessRounds.length;

  let content = (
    <>
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
      </Card>
    </>
  );
  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonsContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("greater")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }
  return (
    <View style={styles.screen}>
      <Title>Opponent's guess</Title>
      {content}
      <View style={styles.listContainer}>
        {/* {guessRounds?.map((guessRound) => (
          <Text key={guessRound}>{guessRound}</Text>
        ))} */}
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLog
              roundNumber={guessRoundListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
  },
  buttonsContainerWide: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  instructionText: {
    marginBottom: 12,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
