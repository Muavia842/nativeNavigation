import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();
export default function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Pages">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Pages" component={Pages} />
    </Drawer.Navigator>
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
