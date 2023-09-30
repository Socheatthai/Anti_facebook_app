import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import image from "../assets/splash4.png";
import { SignUpBtn } from "../components";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={{ top: 40, alignItems: "center", padding: 10 }}>
        <Text style={{ fontSize: 26, fontWeight: "bold" }}>
          Welcome To Anti Facebook
        </Text>
        <Text style={{ fontSize: 18, fontWeight: 600, top: 5 }}>
          Share, Comment and Discover
        </Text>
        <Text style={{ fontSize: 18, fontWeight: 600, top: 5 }}>
          Let's Join With Us!
        </Text>
      </View>
      <View style={{ alignItems: "center", top: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", top: 120 }}>
          Create Your Account Here
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <SignUpBtn />
        </TouchableOpacity>
      </View>
      <View style={{ top: 180 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>OR</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          top: 200,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Already Have An Account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              left: 6,
              color: "#3768D2",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 300,
    top: 20,
  },
});
export default SplashScreen;
