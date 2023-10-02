import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import image from "../assets/login.png";
import { Input } from "../components";
import { LogInBtn } from "../components";
const LoginScreen = () => {
  const navigation = useNavigation();
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError("Please input email", "email");
      isValid = false;
    }
    if (!inputs.password) {
      handleError("Please enter a valid Password", "password");
    }
  };
  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingTop: 20, alignItems: "center" }}
      >
        <Image source={image} style={styles.image} />
        <Text style={{ fontSize: 22, fontWeight: "bold", top: 20 }}>
          Enter Your Details
        </Text>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS == "ios" ? "padding" : null}
        >
          <View style={{ top: 20, marginVertical: 20 }}>
            <Input
              onChangeText={(text) => handleOnChange(text, "email")}
              onFocus={() => handleError(null, "email")}
              placeholder="Enter your email address"
              iconName="email-outline"
              label="Email"
              keyboardType="email-address"
              error={errors.email}
            />
            <Input
              onChangeText={(text) => handleOnChange(text, "password")}
              onFocus={() => handleError(null, "password")}
              placeholder="Enter your password"
              iconName="lock-outline"
              label="Password"
              password
              error={errors.password}
            />
            <Text
              onPress={() => navigation.navigate("ForgotPassword")}
              style={{ fontSize: 18, fontWeight: 500, bottom: 10 }}
            >
              Forgot Password
            </Text>
            <LogInBtn title="Login" onPress={validate} />
            <Text
              onPress={() => navigation.navigate("SignUp")}
              style={{
                textAlign: "center",
                fontSize: 17,
                fontWeight: "bold",
                paddingTop: 60,
              }}
            >
              Don't Have An Account? Sign Up
            </Text>
          </View>
        </KeyboardAvoidingView>
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
