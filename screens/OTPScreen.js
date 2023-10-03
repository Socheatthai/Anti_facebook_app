import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import OTPImage from "../assets/OTP1.png";

// dismiss keyboard

const OTPScreen = () => {
  const firstNum = useRef();
  const secondNum = useRef();
  const thirdNum = useRef();
  const fourthNum = useRef();
  const [OTP, setOTP] = useState({ 1: "", 2: "", 3: "", 4: "" });
  const [count, setCount] = useState(60);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count == 0) {
        clearInterval(interval);
      } else {
        setCount(count - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss(); // handle touch screen and the keyboard will disappear
      }}
    >
      <View style={styles.container}>
        <View>
          <Image source={OTPImage} style={styles.image} />
        </View>
        <View style={{ top: 20 }}>
          <Text style={{ fontSize: 25, fontWeight: 600, color: "#101080" }}>
            Account Verification
          </Text>
        </View>
        <View style={{ top: 30 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 500,
              color: "#0F8069",
              textAlign: "center",
            }}
          >
            Please enter the 4-digit code sent to
            <Text style={{ color: "#3D7CD4" }}> test@gmail.com</Text>
          </Text>
        </View>

        <View style={styles.OtpContainer}>
          <View style={styles.OtpBox}>
            <TextInput
              style={styles.OtpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={firstNum}
              // after firstNum => secondNum
              // and delete
              onChangeText={(text) => {
                setOTP({ ...OTP, 1: text });
                text && secondNum.current.focus();
              }}
            />
          </View>
          <View style={styles.OtpBox}>
            <TextInput
              style={styles.OtpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={secondNum}
              onChangeText={(text) => {
                setOTP({ ...OTP, 2: text });
                text ? thirdNum.current.focus() : firstNum.current.focus();
              }}
            />
          </View>
          <View style={styles.OtpBox}>
            <TextInput
              style={styles.OtpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={thirdNum}
              onChangeText={(text) => {
                setOTP({ ...OTP, 3: text });
                text ? fourthNum.current.focus() : secondNum.current.focus();
              }}
            />
          </View>
          <View style={styles.OtpBox}>
            <TextInput
              style={styles.OtpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={fourthNum}
              onChangeText={(text) => {
                setOTP({ ...OTP, 4: text });
                !text && thirdNum.current.focus();
              }}
            />
          </View>
        </View>
        {/* Resend code */}
        <View style={styles.Resend}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: count == 0 ? "blue" : "black",
            }}
            onPress={() => {
              setCount(60);
            }}
          >
            Resend
          </Text>
          {count !== 0 && (
            <Text style={{ marginLeft: 20, fontSize: 20, color: "green" }}>
              {count + " seconds"}
            </Text>
          )}
        </View>
        {/* <VerifyBtn /> */}
        <TouchableOpacity
          style={styles.container1}
          // onPress={() => console.log(OTP)}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            Verify
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#E2FBFC",
  },
  image: {
    width: 200,
    height: 200,
  },
  OtpContainer: {
    marginHorizontal: 30,
    marginBottom: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    top: 70,
  },
  OtpBox: {
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    borderColor: "#1B3ECD",
    borderWidth: 1.5,
    width: 55,
    height: 55,
  },
  OtpText: {
    top: 14,
    fontSize: 20,
    padding: 0,
    textAlign: "center",
    color: "black",
  },
  container1: {
    width: 300,
    backgroundColor: "#3768D2",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    top: 130,
  },
  Resend: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    top: 80,
  },
});
export default OTPScreen;
