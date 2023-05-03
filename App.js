import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

export default function App() {
  const [showText, setShowText] = useState(false);

  const onPressButton = () => {
    setShowText(!showText);
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: "#b3b3b3" }}>Hello world</Text>
      <Button
        onPress={onPressButton}
        title={showText ? "Hide" : "Show"}
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      {showText && (
        <Text style={{ color: "#b3b3b3", marginTop: 20, fontWeight: "bold" }}>
          Visible
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2a2a2a",
    alignItems: "center",
    justifyContent: "center",
    color: "#b3b3b3",
  },
});
