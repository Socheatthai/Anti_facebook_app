import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NameUser,
  Login,
  DateOfBirth,
  OnBording,
  Email,
  OTP,
  Success,
  Home,
} from "./screens";
const Stack = createNativeStackNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({
    Regular: require("./assets/fonts/Gilroy-Regular.otf"),
    Bold: require("./assets/fonts/Gilroy-Bold.otf"),
    Medium: require("./assets/fonts/Gilroy-Medium.otf"),
    SemiBold: require("./assets/fonts/Gilroy-SemiBold.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="OnBording"
          component={OnBording}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="NameUser"
          component={NameUser}
          options={{ title: "Create an account" }}
        />
        <Stack.Screen
          name="DateOfBirth"
          component={DateOfBirth}
          options={{ title: "Create an account" }}
        />
        <Stack.Screen
          name="Email"
          component={Email}
          options={{ title: "Create an account" }}
        />
        <Stack.Screen
          name="OTP"
          component={OTP}
          options={{ title: "Create an account" }}
        />
        <Stack.Screen
          name="Success"
          component={Success}
          options={{ title: "Create an account" }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
