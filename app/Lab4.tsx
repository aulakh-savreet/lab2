import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import vacationDestinations from "../constants/vacationsDestinations"; // Corrected import path

const Lab4 = () => {
  const [selectedDestinations, setSelectedDestinations] = useState<number[]>([]);

  // Function to toggle selection
  const toggleSelection = (id: number) => {
    setSelectedDestinations((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((destId) => destId !== id)
        : [...prevSelected, id]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose the destinations you would like a quote for</Text>
      <FlatList
        data={vacationDestinations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.destinationItem,
              selectedDestinations.includes(item.id) && styles.selectedItem
            ]}
            onPress={() => toggleSelection(item.id)}
          >
            <Text style={styles.destinationText}>
              {item.location} - ${item.price} - {item.average_yearly_temperature}{" "}
              {selectedDestinations.includes(item.id) && <Text>{"\u2705"}</Text>}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  destinationItem: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  selectedItem: {
    backgroundColor: "#d4edda",
  },
  destinationText: {
    fontSize: 16,
  },
});

export default Lab4;
