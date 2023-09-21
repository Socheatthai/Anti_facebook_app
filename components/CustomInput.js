import React from "react";
import { View, TextInput } from "react-native";
const CustomInput = (props) => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 20,
        height: 50,
        top: 40,
        alignItems: "center",
        paddingHorizontal: 10,
        width: "80%",
        backgroundColor: "white",
        marginVertical: 10,
      }}
    ></TextInput>
  );
};

export default CustomInput;
