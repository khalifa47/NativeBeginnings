import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [time, setTime] = React.useState<string>("night");
  const [num, setNum] = React.useState<number>(1);

  const handleChangeTime = () => {
    switch (time) {
      case "night":
        setTime("day");
        break;
      case "day":
        setTime("night");
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text>Do not go gentle into that good {time}!</Text>
      <Text>
        My favorite number is <Text style={styles.styleText}>{num}</Text>
      </Text>
      <View style={styles.button}>
        <Button title="Change Time" onPress={handleChangeTime} />
        <TextInput
          keyboardType="decimal-pad"
          style={styles.input}
          placeholder={"Favorite number"}
          onChangeText={(val) => {
            if (parseInt(val)) {
              setNum(parseInt(val));
            }
          }}
        />
      </View>
      <StatusBar style="auto" />
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
  button: {
    marginTop: 10,
  },
  styleText: {
    color: "red",
  },
  input: {
    borderRadius: 6,
    backgroundColor: "#d1d1d1",
    margin: 10,
    padding: 10,
  },
});
