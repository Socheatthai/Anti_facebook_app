import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ForgotPassword from "./screens/ForgotPassword";
const Stack = createNativeStackNavigator();

const Navigation = () => {
  const isLogged = false;

  if (!isLogged) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerBackTitle: "Back" }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerBackTitle: "Back" }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerBackTitle: "Back" }}
        />
      </Stack.Navigator>
    );
  }
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
