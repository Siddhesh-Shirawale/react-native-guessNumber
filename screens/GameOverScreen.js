import React, { useDebugValue } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import colors from "../components/constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

const GameOver = ({ roundsNumber, userNumber, restartGame }) => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;
  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }
  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/success.png")}
          />
        </View>
        <View>
          <Text style={styles.summaryText}>
            Your phone needed{" "}
            <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess
            number <Text style={styles.highlight}>{userNumber}</Text>
          </Text>
          <PrimaryButton onPress={restartGame}>Restart</PrimaryButton>
        </View>
      </View>
    </ScrollView>
  );
};

export default GameOver;

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: { width: "100%", height: "100%" },
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: colors.primary500,
  },
  screen: {
    flex: 1,
  },
});
