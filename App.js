import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useCallback, useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import colors from "./components/constants/colors";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [rounds, setRounds] = useState(0);
  const pickedNumberHandler = (pickedNo) => {
    setUserNumber(pickedNo);
  };
  const gameOverHandler = () => {
    setGameIsOver(true);
  };

  const restartGame = () => {
    setUserNumber(null);
    setGameIsOver(false);
    setRounds(0);
  };

  const addRound = () => {
    const newRound = rounds + 1;
    setRounds(newRound);
  };

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[colors.primary700, colors.accent500]}
        style={styles.rootScreen}
        onLayout={onLayoutRootView}
      >
        <ImageBackground
          source={require("./assets/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.safeArea}>
            {gameIsOver && userNumber ? (
              <GameOverScreen
                roundsNumber={rounds}
                userNumber={userNumber}
                restartGame={restartGame}
              />
            ) : userNumber ? (
              <GameScreen
                userNumber={userNumber}
                gameOverHandler={gameOverHandler}
                increaseRounds={addRound}
              />
            ) : (
              <StartGameScreen onPickNumber={pickedNumberHandler} />
            )}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
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
