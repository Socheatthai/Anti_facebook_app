import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const InputCus = ({
  marginH,
  marginB,
  border,
  borderB,
  borderBColor,
  labelName,
  width,
  value,
  onChangeText,
  secureTextEntry,
}) => {
  return (
    <View style={styles.container(marginH, marginB, width)}>
      <Text style={styles.label}>{labelName}</Text>
      <TextInput
        style={styles.input(border, borderB, borderBColor)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default InputCus;

const styles = StyleSheet.create({
  container: (marginH, marginB, width) => ({
    marginHorizontal: marginH,
    marginBottom: marginB,
    width: width,
  }),
  label: {
    fontSize: 16,
    fontFamily: "Bold",
    color: "#656b75",
  },
  input: (border, borderB, borderBColor) => ({
    width: "100%",
    borderWidth: border,
    borderColor: borderBColor,
    borderBottomWidth: borderB,
    borderBottomColor: borderBColor,
    height: 40,
  }),
});
