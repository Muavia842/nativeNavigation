import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";

export default function StackNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Login = ({ navigation }) => {
  return (
    <View>
      <Text>hello Login Page welcome to our Tab Navigation</Text>
      <Button
        onPress={() => navigation.navigate("Home")}
        title="navigate to another"
      />
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
