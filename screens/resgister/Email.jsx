import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { InputCus, ButtonCus } from "../../components";
import { SIZES } from "../../constants/theme";

const Email = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailValidation = () => {
    const isEmailValid = true;

    if (!isEmailValid) {
      setEmailError("This email is already registered.");
    } else {
      setEmailError("");
    }

    return isEmailValid;
  };

  const handleContinue = () => {
    const isValidEmail = handleEmailValidation();

    if (isValidEmail) {
      console.log("Email:", email);
      navigation.navigate("OTP", {
        email: email,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>What is your Email?</Text>
      <View style={styles.inputContainer}>
        <InputCus
          labelName="Your Email"
          borderBColor={"#e9eaec"}
          marginB={10}
          borderB={1}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        {emailError ? (
          <Text style={styles.errorMessage}>{emailError}</Text>
        ) : null}
      </View>
      <ButtonCus
        onPress={handleContinue}
        btnText="Continue"
        textColor="#FFFFFF"
        width={200}
        backgroundColor="#007BFF"
        borderWidth={1}
        borderColor="#007BFF"
        shadowColor="#000"
        icon={null}
        btnColor="#FFFFFF"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: "Bold",
    fontSize: SIZES.large,
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 10,
  },
  errorMessage: {
    color: "red",
    marginBottom: 10,
    textAlign: "center",
  },
});

export default Email;
