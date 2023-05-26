import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import colors from "./components/constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const pickedNumberHandler = (pickedNo) => {
    setUserNumber(pickedNo);
  };
  const gameOverHandler = () => {
    setGameIsOver(true);
  };
  const restartGame = () => {
    setUserNumber(null);
    setGameIsOver(false);
  };
  return (
    <LinearGradient
      colors={[colors.primary700, colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.safeArea}>
          {gameIsOver && userNumber ? (
            <GameOverScreen restartGame={restartGame} />
          ) : userNumber ? (
            <GameScreen
              userNumber={userNumber}
              gameOverHandler={gameOverHandler}
            />
          ) : (
            <StartGameScreen onPickNumber={pickedNumberHandler} />
          )}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    marginTop: 20,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
