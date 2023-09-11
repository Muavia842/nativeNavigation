import { View, Text, StatusBar, StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();
export default function TabTopNavigation() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Pages" component={Pages} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const Home = () => {
  return (
    <View style={styles.Container}>
      <Text>hello Home Page welcome to our Tab Navigation</Text>
    </View>
  );
};

const About = () => {
  return (
    <View style={styles.Container}>
      <Text>hello About Page welcome to our Tab Navigation😎😋</Text>
    </View>
  );
};
const Pages = () => {
  return (
    <View style={styles.Container}>
      <Text>hello Pages Page welcome to our Tab Navigation😍😘</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
