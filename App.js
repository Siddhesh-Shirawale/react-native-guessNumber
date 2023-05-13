import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [goalName, setGoalName] = useState("");

  const onAddGoal = () => {
    setGoals((currentGoals) => [
      { text: goalName, key: Math.random().toString() },
      ...currentGoals,
    ]);
  };

  const handleInputChange = (enteredText) => {
    setGoalName(enteredText);
  };

  const clearGoals = () => {
    setGoals([]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.flexContainer}>
        <TextInput
          style={styles.inputGroup}
          placeholder="Your goals"
          // value={goalName}
          onChangeText={handleInputChange}
        />

        <Button
          onPress={onAddGoal}
          style={{ borderRadius: 8 }}
          title="Add goals"
          color="#191970"
        />
      </View>
      <View style={styles.goalsContainer}>
        <View
          style={{
            justifyContent: "center",
            padding: 2,
            borderRadius: 8,
            width: "100%",
          }}
        >
          <Button onPress={clearGoals} title="Clear" color="#d3d3d3" />
        </View>
        <FlatList
          style={{ width: "100%" }}
          data={goals}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{item?.text}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
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
  goalsContainer: {
    flex: 5,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  goalItem: {
    margin: 8,
    borderRadius: 4,
    backgroundColor: "#20b2aa",
    color: "white",
    // width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  goalText: {
    color: "white",
  },
});

// borderRadius on Text doesn't work in ios, so wrap around that element with view and apply styles to that
