import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LottieView from "lottie-react-native";
import CustomInput from "../components/CustomInput";
import { Button } from "../components";
const Login = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
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
      <View
        style={{
          top: 70,
          height: 490,
          width: 420,
          borderTopRightRadius: 70,
          borderTopLeftRadius: 70,
          backgroundColor: "#14527F",
          alignItems: "center",
        }}
      >
        <CustomInput placeholder="Email" keyboardType={"email-address"} />
        <CustomInput placeholder="Password" secureTextEntry={true} />
        <View
          style={{
            alignItems: "flex-end",
            width: "78%",
            paddingVertical: 50,
          }}
        >
          <Text
            style={{
              fontSize: 17,
              color: "white",
              fontWeight: "bold",
              bottom: 20,
            }}
          >
            Forgot Password
          </Text>
        </View>
        <View>
          <Button />
        </View>
        <View
          style={{
            top: 30,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Don't Have An Account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 17,
                left: 10,
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#59A7B3",
    alignItems: "center",
  },
});

export default Login;
