import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SignUpBtn = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
        Sign Up
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    backgroundColor: "#3768D2",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    top: 130,
  },
});

export default SignUpBtn;
