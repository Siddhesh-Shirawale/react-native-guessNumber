import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ onAddGoal }) => {
  const [goalName, setGoalName] = useState("");

  const handleInputChange = (goalName) => {
    setGoalName(goalName);
  };

  const handleAddGoal = () => {
    onAddGoal(goalName);
    setGoalName("");
  };

  return (
    <View style={styles.flexContainer}>
      <TextInput
        style={styles.inputGroup}
        placeholder="Your goals"
        value={goalName}
        onChangeText={handleInputChange}
      />
      <Button
        onPress={handleAddGoal}
        style={{ borderRadius: 8 }}
        title="Add goals"
        color="#191970"
      />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputGroup: {
    borderWidth: 1,
    borderColor: "#555",
    padding: 8,
    width: "70%",
    marginRight: 8,
  },
  flexContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#555",
    flex: 1,
  },
});
