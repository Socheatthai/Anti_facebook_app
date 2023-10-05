import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { ButtonCus, InputCus } from "../../components";
import { SIZES } from "../../constants/theme";
import avatar from "../../assets/images/avatarfacebook.jpg";

const Login = ({ route, navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { username } = route.params;

  const handleLogin = async () => {
    try {
      // await new Promise((resolve) => setTimeout(resolve, 2000));

      if (password === "12345") {
        console.log("Login successful");
        navigation.navigate("Avatar");
      } else {
        Alert.alert("Login Error", "Incorrect password");
      }
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert("Login Error", "An error occurred while logging in.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {username ? (
        <View>
          <View style={{ alignItems: "center" }}>
            <Image source={avatar} style={styles.avatar} />
            <Text style={{ marginTop: 10, fontFamily: "Medium" }}>
              Brak Lihou
            </Text>
            <View style={styles.passwordInputContainer}>
              <InputCus
                placeholder={"Your password"}
                borderBColor="#e9eaec"
                marginB={20}
                border={1}
                width={300}
                onChangeText={(pass) => setPassword(pass)}
                value={password}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                style={styles.showHidePasswordButton}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Ionicons
                  name={showPassword ? "eye-off-outline" : "eye-outline"}
                  size={24}
                  color="#000"
                />
              </TouchableOpacity>
            </View>

            <ButtonCus
              onPress={handleLogin}
              btnText="Login"
              textColor="#FFFFFF"
              width={200}
              backgroundColor="#007BFF"
              borderWidth={1}
              borderColor="#007BFF"
              shadowColor="#000"
              icon={null}
              btnColor="#FFFFFF"
            />
            <TouchableOpacity>
              <Text
                style={{ marginTop: 30, fontFamily: "Bold", color: "#007BFF" }}
              >
                Forget Password ?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <>
          <Text style={styles.title}>Let's sign you in</Text>
          <Text style={styles.subtitle}>We've missed you</Text>
          <View style={styles.inputContainer}>
            <InputCus
              labelName="Your Email"
              borderBColor="#e9eaec"
              marginB={10}
              borderB={1}
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
            <View style={styles.passwordInputContainer}>
              <InputCus
                labelName="Your Password"
                borderBColor="#e9eaec"
                marginB={20}
                borderB={1}
                onChangeText={(pass) => setPassword(pass)}
                value={password}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                style={styles.showHidePasswordButton}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Ionicons
                  name={showPassword ? "eye-off-outline" : "eye-outline"}
                  size={24}
                  color="#000"
                />
              </TouchableOpacity>
            </View>
          </View>
          <ButtonCus
            onPress={handleLogin}
            btnText="Login"
            textColor="#FFFFFF"
            width={200}
            backgroundColor="#007BFF"
            borderWidth={1}
            borderColor="#007BFF"
            shadowColor="#000"
            icon={null}
            btnColor="#FFFFFF"
          />
          <TouchableOpacity>
            <Text
              style={{ marginTop: 30, fontFamily: "Bold", color: "#007BFF" }}
            >
              Forget Password ?
            </Text>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: "Bold",
    fontSize: SIZES.large,
  },
  subtitle: {
    fontFamily: "Regular",
    fontSize: SIZES.medium,
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
  },
  passwordInputContainer: {
    position: "relative",
  },
  showHidePasswordButton: {
    position: "absolute",
    top: 25,
    right: 0,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 60,
  },
});

export default Login;
