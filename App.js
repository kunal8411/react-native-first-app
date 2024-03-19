import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";

export default function App() {
  const [coarseGoals, setCoarseGoals] = useState([]);
  const [coarseInput, setCoarseInput] = useState("");
  const addNewGoal = () => {
    setCoarseGoals((prevState) => [
      ...prevState,
      { name: coarseInput, id: Math.random() },
    ]);
  };
  const onChangCoarseInput = (inputText) => {
    setCoarseInput(inputText);
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter goals here"
          onChangeText={onChangCoarseInput}
        />
        <Button title="Add goal" onPress={addNewGoal} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={coarseGoals}
          keyExtractor={(item, data) => {
            return item.id;
          }}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalsContainer}>
                <Text style={styles.goalsTextContainer}>
                  {itemData?.item?.name}
                </Text>
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
    padding: 50,
    paddingHorizontal: 16,
    flex: 1,
    height: 10,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    padding: 8,
    marginRight: 8,
  },
  goalsContainer: {
    flex: 4,
  },
  goalsTextContainer: {
    marginTop: 10,
    backgroundColor: "lightblue",
    padding: 5,
  },
});
