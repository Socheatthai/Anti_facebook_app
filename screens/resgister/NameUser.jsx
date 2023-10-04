import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { InputCus, ButtonCus } from "../../components";
import { SIZES } from "../../constants/theme";

const NameUser = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>What is your name?</Text>
      <View style={styles.inputContainer}>
        <InputCus
          labelName="First Name"
          borderBColor="#e9eaec"
          marginB={10}
          borderB={1}
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
        <InputCus
          labelName="Last Name"
          borderBColor="#e9eaec"
          marginB={20}
          borderB={1}
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
      </View>
      <ButtonCus
        onPress={() => {
          console.log("First Name:", firstName);
          console.log("Last Name:", lastName);

          navigation.navigate("DateOfBirth", {
            firstName: firstName,
            lastName: lastName,
          });
        }}
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
  },
});

export default NameUser;
