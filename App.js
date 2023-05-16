import { Button, StyleSheet, View, FlatList, Text, Image } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

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
      handleCloseModal();
    }
  };

  const deleteGoalHandler = (item) => {
    const updatedGoals = goals?.filter((goal) => goal?.key !== item?.key);

    setGoals(updatedGoals);
  };

  const handleCloseModal = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        {/* Static image */}
        {/* <Image
        source={require("./assets/adaptive-icon.png")}
        style={{ width: "100%", height: 200, marginBottom: 20 }}
      /> */}
        {/* Dynamic image */}
        <Image
          source={{
            uri: "https://images.freeimages.com/images/large-previews/ebd/flamenco-1551386.jpg",
          }}
          style={{ width: "100%", height: 200, marginBottom: 20 }}
        />

        <Button
          title="Add your goal"
          color="#191970"
          onPress={startAddGoalHandler}
          style={{ borderRadius: 8 }}
        />
        <GoalInput
          onAddGoal={onAddGoal}
          modalIsVisible={modalIsVisible}
          handleCloseModal={handleCloseModal}
        />
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#FFE194",
  },

  goalsContainer: {
    flex: 5,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});

// borderRadius on Text doesn't work in ios, so wrap around that element with view and apply styles to that

// also can apply default background color from expo(app.json)
// add property
// backgroundColor: "#adgdagasg"
