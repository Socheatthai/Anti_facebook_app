import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
const Login = () => {
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        // ref={animation}
        style={{
          width: 200,
          height: 270,
          alignItems: "center",
          justifyContent: "center",
          top: 10,
        }}
        source={require("../assets/loginPic.json")}
      />
      <CustomInput placeholder="Email" />
      <CustomInput placeholder="Password" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});

export default Login;
