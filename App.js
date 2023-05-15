import {
  Button,
  StyleSheet,
  TextInput,
  View,
  FlatList,
  Text,
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [errMsg, setErrMsg] = useState("");

  const onAddGoal = (goalName) => {
    if (goalName === "") {
      setErrMsg("Goal cannot be empty");

      setTimeout(() => {
        setErrMsg("");
      }, 3000);
    } else {
      setGoals((currentGoals) => [
        { text: goalName, key: Math.random().toString() },
        ...currentGoals,
      ]);
    }
  };

  const deleteGoalHandler = (item) => {
    const updatedGoals = goals?.filter((goal) => goal?.key !== item?.key);

    setGoals(updatedGoals);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={onAddGoal} />
      {errMsg !== "" && (
        <View>
          <Text style={{ color: "red" }}>{errMsg}</Text>
        </View>
      )}
      <View style={styles.goalsContainer}>
        <FlatList
          style={{ width: "100%" }}
          data={goals}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => {
            return (
              <GoalItem item={item} deleteGoalHandler={deleteGoalHandler} />
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

  goalsContainer: {
    flex: 5,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});

// borderRadius on Text doesn't work in ios, so wrap around that element with view and apply styles to that
