import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const LoginBtn = ({ title, onPress = () => {} }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 55,
        width: "auto",
        backgroundColor: "#3768D2",
        justifyContent: "center",
        alignItems: "center",
        top: 30,
        borderRadius: 5,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default LoginBtn;
