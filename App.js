import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function App() {
  const [showText, setShowText] = useState(false);

  const onPressButton = () => {
    setShowText(!showText);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.flexContainer}>
        <TextInput style={styles.inputGroup} placeholder="Yout course goals" />
        <Button style={{ borderRadius: 8 }} title="Add goals" />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputGroup: {
    borderWidth: 1,
    borderColor: "#555",
    padding: 8,
    borderRadius: 8,
    width: "80%",
    marginRight: 8,
  },
  flexContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
