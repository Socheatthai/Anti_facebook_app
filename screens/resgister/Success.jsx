import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/images/Facebook_Logo.png";
import avatar from "../../assets/images/avatarfacebook.jpg";
import { ButtonCus } from "../../components";

const Success = ({ navigation }) => {
  const handleCancel = () => {
    navigation.goBack();
  };

  const handleOK = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logoImage} />
      </View>
      <View style={styles.content}>
        <Image source={avatar} style={styles.avatar} />
        <Text style={styles.username}>Brak Lihou</Text>
      </View>
      <View style={styles.buttons}>
        <ButtonCus
          onPress={handleCancel}
          btnText="Cancel"
          textColor="#FFFFFF"
          width={100}
          backgroundColor="#007BFF"
          borderWidth={1}
          borderColor="#007BFF"
          shadowColor="#000"
          icon={null}
          btnColor="#FFFFFF"
        />
        <ButtonCus
          onPress={handleOK}
          btnText="OK"
          textColor="#FFFFFF"
          width={100}
          backgroundColor="#007BFF"
          borderWidth={1}
          borderColor="#007BFF"
          shadowColor="#000"
          icon={null}
          btnColor="#FFFFFF"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    height: 60,
    width: 60,
    marginTop: 50,
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 60,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginHorizontal: 20,
    padding: 10,
    marginTop: 100,
    gap: 20,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.2)",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderRadius: 10,
  },
  username: {
    fontSize: 18,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 300,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "blue",
  },
});

export default Success;
