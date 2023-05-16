import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
} from "react-native";

const GoalInput = ({ onAddGoal, modalIsVisible, handleCloseModal }) => {
  const [goalName, setGoalName] = useState("");

  const handleInputChange = (goalName) => {
    setGoalName(goalName);
  };

  const handleAddGoal = () => {
    onAddGoal(goalName);
    setGoalName("");
    // setModalIsVisible(false);
  };

  return (
    <Modal visible={modalIsVisible} animationType="slide">
      <View style={styles.flexContainer}>
        <TextInput
          style={styles.inputGroup}
          placeholder="Your goals"
          value={goalName}
          onChangeText={handleInputChange}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              onPress={handleCloseModal}
              style={{ borderRadius: 8 }}
              title="Cancel"
              color="#4C4C6D"
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={handleAddGoal}
              style={{ borderRadius: 8 }}
              title="Add goals"
              color="#1B9C85"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputGroup: {
    borderWidth: 1,
    borderColor: "#555",
    padding: 8,
    width: "100%",
    marginRight: 8,
    borderRadius: 8,
  },
  flexContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    // borderBottomWidth: 1,
    // borderColor: "#555",
    flex: 1,
    padding: 16,
    backgroundColor: "#E8F6EF",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    width: "50%",
    marginHorizontal: 8,
    borderRadius: 8,
  },
});
