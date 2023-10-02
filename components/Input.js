import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Input = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [hidePassword, setHidePassword] = useState(password);
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.InputContainer,
          {
            borderColor: error ? "red" : isFocus ? "#292D9A" : "#C8E1EE",
          },
        ]}
      >
        <Icon
          name={iconName}
          style={{ fontSize: 22, color: "#85B7D0", marginRight: 10 }}
        />
        <TextInput
          secureTextEntry={hidePassword}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocus(true);
          }}
          onBlur={() => {
            setIsFocus(false);
          }}
          {...props}
          style={{ flex: 1 }}
        />
        {/* hide eye icon on email Input */}
        {password && (
          // show eye both of input
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            style={{ fontSize: 20, color: "#82BDDB" }}
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
          />
        )}
      </View>

      {error && (
        <Text style={{ color: "red", fontSize: 14, marginTop: 7 }}>
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 18,
    color: "#296D8E",
  },
  InputContainer: {
    width: 340,
    height: 55,
    backgroundColor: "#ECECEC",
    flexDirection: "row",
    paddingHorizontal: 15,
    borderWidth: 0.5,
    alignItems: "center",
    borderRadius: 5,
  },
});

export default Input;
