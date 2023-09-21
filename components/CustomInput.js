import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

const CustomInput = ({ value, setValue, placeholder }) => {
  return (
    <View style={style.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={style.input}
      />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    width: "100%",
    top: 40,
    alignItems: "center",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  input: {
    width: "100%",
    backgroundColor: "#F4F5F5",
    color: "#000000",
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
});
export default CustomInput;
