import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { SafeAreaView } from "react-native-safe-area-context";
const BirthdayScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ top: 10 }}>
        <Text style={{ fontSize: 18, color: "#296D8E" }}>
          Select Your Birthday
        </Text>
        <TouchableOpacity
          style={styles.touchOp}
          onPress={handleOnPressStarOpenDatePicker}
        >
          <Icon
            name="calendar-outline"
            style={{
              fontSize: 22,
              color: "#85B7D0",
              marginLeft: 10,
              top: 10,
            }}
          />
          <Text
            style={{
              marginLeft: 45,
              bottom: 10,
              color: "#296D8E",
            }}
          >
            {selectedStartDate}
          </Text>
        </TouchableOpacity>
        {/* create modal for datepicker */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={openStartDatePicker}
        >
          <View style={styles.centerview}>
            <View style={styles.modal}>
              <TouchableOpacity onPress={handleOnPressStarOpenDatePicker}>
                <Text style={{ color: "white", fontWeight: 600, fontSize: 18 }}>
                  Close
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginVertical: 60,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#175373",
  },
  touchOp: {
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "#C8E1EE",
    height: 55,
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#ECECEC",
  },
  centerview: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    top: 80,
    margin: 20,
    backgroundColor: "#395C6F",
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 35,
    width: "84%",
    height: 55,
    shadowColor: "#A4DE5E",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default BirthdayScreen;
