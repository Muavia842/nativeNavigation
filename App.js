import "react-native-gesture-handler";
import { View, Text } from "react-native";
import React from "react";
import StackNavigation from "./src/stackNavigation";
import TabTopNavigation from "./src/tabTopNavigation";
import DrawerNavigation from "./src/drawerNavigation";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
}
