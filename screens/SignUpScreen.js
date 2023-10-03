import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  Keyboard,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from "react-native";
import SignUpImage from "../assets/signup.png";
import { Input } from "../components";
import { NextBtn } from "../components";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import DatePicker from "@react-native-community/datetimepicker";
import { getFormatedDate } from "react-native-modern-datepicker";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.username) handleError("Please input your name", "username");
    // isValid = false;

    if (!inputs.email) handleError("Please input email", "email");
    // } else if (!inputs.email.match("@")) {
    //   handleError("Invalid Email", "email");
    //   isValid = false;
    // } else if (!inputs.email.match(" ") >= 0) {
    //   handleError("Email should not contain space", "email");
    //   isValid = false;
    // }

    if (!inputs.password)
      handleError("Please enter a valid Password", "password");
    // } else if (!inputs.password.length < 6) {
    //   handleError("Password must be at least 6 characters", "password");
    // }
  };
  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };
  // datepicker setup
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState("");

  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);
      if (Platform.OS === "android") {
        toggleDatepicker();
        setDateOfBirth(formatDate(currentDate));
      }
    } else {
      toggleDatepicker();
    }
  };
  // confirm ios
  const confirmIOSDate = () => {
    setDateOfBirth(formatDate(date));
    toggleDatepicker();
  };

  // format date to DD-MM-YYYY
  const formatDate = (rawDate) => {
    let date = new Date(rawDate);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return `${day}-${month}-${year}`;
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={20}
      >
        <ScrollView contentContainerStyle={{ alignItems: "center" }}>
          {/* <Image source={SignUpImage} style={styles.image} /> */}
          <Text
            style={{
              fontSize: 25,
              textAlign: "center",
              fontWeight: "bold",
              marginTop: 50,
              color: "#38C0C2",
            }}
          >
            Create Your Account Here
          </Text>
          <View style={{ marginVertical: 20, top: 20 }}>
            <Input
              onChangeText={(text) => handleOnChange(text, "username")}
              onFocus={() => handleError(null, "username")}
              label="Username"
              placeholder="Enter username"
              iconName="account-outline"
              error={errors.username}
            />
            <Input
              onChangeText={(text) => handleOnChange(text, "email")}
              onFocus={() => handleError(null, "email")}
              placeholder="Enter email address"
              iconName="email-outline"
              label="Email"
              keyboardType="email-address"
              error={errors.email}
            />
            <Input
              onChangeText={(text) => handleOnChange(text, "password")}
              onFocus={() => handleError(null, "password")}
              placeholder="Enter password"
              iconName="lock-outline"
              label="Password"
              password
              error={errors.password}
            />

            {/* datepicker form*/}
            <View style={{ top: 10 }}>
              <Text style={{ fontSize: 18, color: "#296D8E" }}>
                Select Birthday
              </Text>
              {showPicker && (
                <DatePicker
                  mode="date"
                  value={date}
                  display="spinner"
                  onChange={onChange}
                  style={styles.datepicker}
                  maximumDate={new Date("2050-1-1")}
                  minimumDate={new Date("1900-1-1")}
                />
              )}
              {/* IOS */}
              {showPicker && Platform.OS === "ios" && (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <TouchableOpacity
                    style={[
                      styles.button,
                      styles.pickerButton,
                      { backgroundColor: "#86C0C7" },
                    ]}
                    onPress={toggleDatepicker}
                  >
                    <Text style={{ fontWeight: "bold" }}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.button,
                      styles.pickerButton,
                      { backgroundColor: "#10E8A2" },
                    ]}
                    onPress={confirmIOSDate}
                  >
                    <Text style={{ fontWeight: "bold" }}>Confirm</Text>
                  </TouchableOpacity>
                </View>
              )}
              {!showPicker && (
                <Pressable onPress={toggleDatepicker}>
                  <TextInput
                    style={styles.input}
                    placeholder="Select Your Date"
                    value={dateOfBirth}
                    editable={false}
                    onPressIn={toggleDatepicker}
                  />
                </Pressable>
              )}
            </View>

            <NextBtn title="Next" onPress={validate} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8F8",
    flex: 1,
    alignItems: "center",
  },
  // image: {
  //   width: 250,
  //   height: 200,
  // },
  touchOp: {
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "#C8E1EE",
    height: 55,
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#ECECEC",
  },
  input: {
    top: 10,
    width: 340,
    height: 55,
    backgroundColor: "#ECECEC",
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "#C8E1EE",
    justifyContent: "center",
    textAlign: "center",
  },
  datepicker: {
    height: 130,
    marginTop: 30,
  },
  button: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 20,
  },
  pickerButton: {
    paddingHorizontal: 30,
  },
});

export default SignUpScreen;
