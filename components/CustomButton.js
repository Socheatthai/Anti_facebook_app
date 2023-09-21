import React from "react";
import { Text, View, StyleSheet } from "react-native";

const CustomButton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>LOGIN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    padding: 14,
    alignItems: "center",
    width: 340,
    borderRadius: 20,
    height: 50,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default CustomButton;
