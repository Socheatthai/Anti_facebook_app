import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/theme";
import { Ionicons } from "@expo/vector-icons";

const ButtonCus = ({
  onPress,
  btnText,
  textColor,
  width,
  backgroundColor,
  borderWidth,
  borderColor,
  shadowColor,
  icon,
  btnColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.btnStyle(
          width,
          backgroundColor,
          borderWidth,
          borderColor,
          shadowColor
        ),
      ]}
    >
      <View style={styles.btnContent}>
        {icon && (
          <Ionicons
            name={icon}
            size={24}
            color={btnColor}
            style={styles.icon}
          />
        )}
        <Text style={styles.btnText(textColor)}>{btnText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCus;

const styles = StyleSheet.create({
  btnText: (textColor) => ({
    fontFamily: "Medium",
    fontSize: SIZES.medium,
    color: textColor,
  }),
  btnStyle: (
    width,
    backgroundColor,
    borderWidth,
    borderColor,
    shadowColor
  ) => ({
    width: width,
    backgroundColor: backgroundColor,
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    borderColor: borderColor,
    borderWidth: borderWidth,
    borderRadius: SIZES.xSmall,
    shadowColor: shadowColor || COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }),
  icon: {
    marginRight: 30,
  },
  btnContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
