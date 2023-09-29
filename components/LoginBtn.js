import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LoginBtn = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
        Login
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    backgroundColor: "#093C55",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    top: 200,
  },
});

export default LoginBtn;
