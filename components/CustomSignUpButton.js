import React from "react";
import { Text, View, StyleSheet } from "react-native";

const CustomSignUpButton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>REGISTER</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#BDB948",
    padding: 14,
    alignItems: "center",
    width: 340,
    borderRadius: 10,
    height: 50,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
export default CustomSignUpButton;
