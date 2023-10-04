import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
import { ButtonCus, InputCus } from "../../components";
import { Ionicons } from "@expo/vector-icons";

const DateOfBirth = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isUnder10, setIsUnder10] = useState(false);
  const [selectedDateOfBirth, setSelectedDateOfBirth] = useState(null);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
    const today = new Date();
    const age = today.getFullYear() - currentDate.getFullYear();

    setIsUnder10(age < 10);
    setSelectedDateOfBirth(currentDate);
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>What is your BirthDay?</Text>
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={toggleDatePicker}>
          <Ionicons
            name="calendar-outline"
            size={24}
            color={"red"}
            style={styles.icon}
          />
        </TouchableOpacity>
        <InputCus
          labelName={"Your BirthDay"}
          borderBColor="#e9eaec"
          borderB={1}
          width={250}
          value={
            selectedDateOfBirth
              ? selectedDateOfBirth.toISOString().split("T")[0]
              : ""
          }
          onChangeText={(text) => {}}
          editable={false}
        />
      </View>
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      {isUnder10 && (
        <Text style={styles.errorMessage}>
          You must be at least 10 years old to create an account.
        </Text>
      )}
      <ButtonCus
        onPress={() => {
          if (!isUnder10) {
            navigation.navigate("Email");
          }
        }}
        btnText="Continue"
        textColor="#FFFFFF"
        width={200}
        backgroundColor={isUnder10 ? "#ccc" : "#007BFF"}
        borderWidth={1}
        borderColor={isUnder10 ? "#ccc" : "#007BFF"}
        shadowColor="#000"
        icon={null}
        btnColor="#FFFFFF"
        disabled={isUnder10}
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
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  errorMessage: {
    color: "red",
    marginBottom: 10,
    textAlign: "center",
  },
});

export default DateOfBirth;
