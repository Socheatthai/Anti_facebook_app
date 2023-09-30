import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import image from "../assets/login.png";
import { Input } from "../components";
import { LogInBtn } from "../components";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingTop: 20, alignItems: "center" }}
      >
        <Image source={image} style={styles.image} />
        <Text style={{ fontSize: 22, fontWeight: "bold", top: 20 }}>
          Enter Your Details
        </Text>
        <View style={{ top: 20, marginVertical: 20 }}>
          <Input
            placeholder="Enter your email address"
            iconName="email-outline"
            label="Email"
            keyboardType="email-address"
          />
          <Input
            placeholder="Enter your password"
            iconName="lock-outline"
            label="Password"
            password
          />
          <Text
            onPress={() => navigation.navigate("ForgotPassword")}
            style={{ fontSize: 18, fontWeight: 500, bottom: 10 }}
          >
            Forgot Password
          </Text>
          <LogInBtn title="Login" />

          <Text
            onPress={() => navigation.navigate("SignUp")}
            style={{
              textAlign: "center",
              fontSize: 17,
              fontWeight: "bold",
              paddingTop: 50,
            }}
          >
            Don't Have An Account? Sign Up
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 250,
  },
});

export default LoginScreen;
