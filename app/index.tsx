import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FruitList from "../components/FruitList";
import LabButton from "../components/push";

export default function Index() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Fruit App!</Text>

      {/* Button to Navigate to Lab4 */}
      <Button title="Go to Lab4" onPress={() => navigation.navigate("Lab4")} />

      <LabButton />
      <FruitList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
