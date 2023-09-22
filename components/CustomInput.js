import React from "react";
import { View, TextInput } from "react-native";
const CustomInput = (props) => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 10,
        height: 50,
        top: 30,
        alignItems: "center",
        paddingHorizontal: 15,
        width: "80%",
        backgroundColor: "white",
        marginVertical: 15,
      }}
    ></TextInput>
  );
};

export default CustomInput;
