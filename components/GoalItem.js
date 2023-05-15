import { useState } from "react";
import { Text, View, StyleSheet, Pressable, Button } from "react-native";

const GoalItem = ({ item, deleteGoalHandler }) => {
  const [showDeleteBtn, setShowDeleteBtn] = useState("");

  const onPressItem = () => {
    setShowDeleteBtn(!showDeleteBtn);
  };

  return (
    <View style={styles.goalItem}>
      <Pressable
        style={
          ({ flex: 1, flexDirection: "row" },
          ({ pressed }) => pressed && styles.pressedItem)
        }
        onPress={onPressItem}
        android_ripple={{ color: "##20b234" }}
      >
        <Text style={styles.goalText}>{item?.["text"]}</Text>
        {showDeleteBtn && (
          <Pressable onPress={() => deleteGoalHandler(item)}>
            <Text style={styles.cancelBtn}>delete</Text>
          </Pressable>
        )}
      </Pressable>
    </View>
  );
};

export default GoalItem;
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 4,
    backgroundColor: "#20b2aa",
    color: "white",
    // width: "100%",
  },
  goalText: {
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 5,
    flex: 10,
  },
  cancelBtn: {
    color: "red",
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
