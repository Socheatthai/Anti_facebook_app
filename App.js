import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screen/Home";
import Login from "./screen/Login";
import Register from "./screen/Register";
import OnboardingScreen from "./screen/Onboarding";
import ForgetPassword from "./screen/ForgetPassword";

const Stack = createNativeStackNavigator();

const Navigate = () => {
  const isLogged = false;

  if (!isLogged) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      </Stack.Navigator>
    );
  }
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Navigate />
    </NavigationContainer>
  );
};

export default App;
