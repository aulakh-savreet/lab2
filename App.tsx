import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Index from "./app/index"; // Adjust path
import Lab4 from "./app/lab4"; // Adjust path

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Index} />
        <Stack.Screen name="Lab4" component={Lab4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
