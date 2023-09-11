import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
export default function TabBottomNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Login = () => {
  return (
    <View>
      <Text>hello Login Page welcome to our Tab Navigation</Text>
    </View>
  );
};

const Home = () => {
  return (
    <View>
      <Text>hello Home Page welcome to our Tab Navigation</Text>
    </View>
  );
};
