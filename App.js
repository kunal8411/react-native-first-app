import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>My First React Native App</Text>
        <StatusBar style="auto" />
      </View>
      <View>
        <Text
          style={{
            margin: "16",
            borderColor: "red",
            borderWidth: 1,
            borderColor: "red",
            borderRadius: 3,
            margin:10,
            padding:5
          }}
        >
          Hello Kunal Khairnar
        </Text>
        <Button title="Click me" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
