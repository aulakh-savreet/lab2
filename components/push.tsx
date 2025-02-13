import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LabButton() {
  const navigation = useNavigation(); // Navigation hook

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [styles.item, pressed && styles.pressed]}
        onPress={() => navigation.navigate("Lab4")} // Navigate to Lab4
      >
        <Text style={styles.text}>Go to Lab4</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    alignItems: "center",
  },
  item: {
    padding: 15,
    backgroundColor: "#4CAF50", // Green color for better UX
    marginBottom: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  pressed: {
    backgroundColor: "#45A049",
    transform: [{ scale: 0.98 }],
  },
  text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
