import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";

interface DecrementButtonProps {
  onDecrement: () => void;
}

const DecrementButton: React.FC<DecrementButtonProps> = ({ onDecrement }) => {
  return (
    <Pressable style={styles.button} onPress={onDecrement}>
      <Text style={styles.buttonText}>Decrement -</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#dc3545", // Red color
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

export default DecrementButton;
