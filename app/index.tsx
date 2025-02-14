import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import FruitList from "../components/FruitList";
import LabButton from "../components/push";

type RootStackParamList = {
  Lab4: undefined;
};

export default function Index() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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
