import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const NextBtn = ({ title, onPress = () => {} }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{
        height: 55,
        width: "auto",
        backgroundColor: "#3768D2",
        justifyContent: "center",
        alignItems: "center",
        top: 70,
        borderRadius: 5,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default NextBtn;
