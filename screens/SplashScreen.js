import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import image from "../assets/splash1.png";
import { SignUpBtn } from "../components";
import { LoginBtn } from "../components";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={{ top: 20, alignItems: "center" }}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>
          Welcome To Anti Facebook
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "bold", top: 5 }}>
          Share, Comment and Discover
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "bold", top: 5 }}>
          Let's Join With Us
        </Text>
      </View>
      <View style={{ alignItems: "center", top: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", top: 120 }}>
          Create Your Account Here
        </Text>
        <SignUpBtn />
      </View>
      <View style={{ top: 200 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>OR</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          top: 240,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Already Have An Account?
        </Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: "bold", left: 10 }}>
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
    height: 200,
    top: 20,
  },
});
export default SplashScreen;
