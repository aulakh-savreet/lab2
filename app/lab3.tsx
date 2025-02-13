import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import IncrementButton from "../components/incrementButton";
import DecrementButton from "../components/decrementButton";

const Lab3: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>My value: {count}</Text>
      <View style={styles.buttonGroup}>
        <IncrementButton onIncrement={increment} />
        <DecrementButton onDecrement={decrement} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4f4f4",
    padding: 20,
  },
  counterText: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 10,
  },
});

export default Lab3;
