import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { InputCus, ButtonCus } from "../../components";
import { SIZES } from "../../constants/theme";

const OTP = ({ navigation }) => {
  const [otp, setOtp] = useState("");
  const handleContinue = () => {
    if (otp === "1234") {
      navigation.navigate("Success");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  const handleResendOTP = () => {
    alert("OTP resent!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>We will send code to your email address</Text>
      <Text style={styles.subtitle}>Enter the 5-digit code here</Text>
      <View style={styles.inputContainer}>
        <InputCus
          labelName="OTP"
          borderBColor="#e9eaec"
          marginB={10}
          borderB={1}
          value={otp}
          onChangeText={(text) => setOtp(text)}
        //   keyboardType="numeric"
        />
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
      <View style={{ marginBottom: 20 }}></View>
      <ButtonCus
        onPress={handleResendOTP}
        btnText="Resend OTP"
        textColor="#007BFF"
        width={200}
        backgroundColor="#FFFFFF"
        borderWidth={1}
        borderColor="#007BFF"
        shadowColor="#000"
        icon={null}
        btnColor="#007BFF"
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
    fontFamily: "SemiBold",
    fontSize: SIZES.medium,
  },
  subtitle: {
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 10,
  },
});

export default OTP;
