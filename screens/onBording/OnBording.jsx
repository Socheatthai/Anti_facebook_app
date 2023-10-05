import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants/theme";
import { ButtonCus } from "../../components";
import logo from "../../assets/images/Facebook_Logo.png";
import avatar from "../../assets/images/avatarfacebook.jpg";

const OnBoarding = ({ navigation }) => {
  const handleCreateAccount = () => {
    navigation.navigate("NameUser");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image source={logo} style={styles.logoImage} />
        <Text style={styles.title}>Welcome to Facebook</Text>
        <Text style={styles.subtitle}>
          Connect with friends, discover new communities, and share your life
          with others.
        </Text>
        {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login", { username: "BrakLihou" });
          }}
        >
          <View style={styles.contents}>
            <View style={styles.userContainer}>
              <Image source={avatar} style={styles.avatar} />
              <Text style={styles.username}>Brak Lihou</Text>
            </View>
            <TouchableOpacity style={styles.menuIcon}>
              <Ionicons name="menu-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity> */}
        <View style={styles.registerBtn}>
          <View style={styles.buttonRow}>
            <View>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => {
                  navigation.navigate("Login", { username: "" });
                }}
              >
                <Ionicons
                  name="logo-facebook"
                  size={30}
                  color={COLORS.primary}
                />
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="search" size={30} color={COLORS.primary} />
                <Text style={styles.buttonText}>Search</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text>Or</Text>
          <ButtonCus
            onPress={handleCreateAccount}
            btnText="Create an Account"
            textColor="#FFFFFF"
            width={300}
            backgroundColor={COLORS.primary}
            borderColor="#FFFFFF"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    marginTop: 100,
    marginHorizontal: 20,
    alignItems: "center",
    gap: 15,
  },
  title: {
    fontFamily: "Bold",
    fontSize: SIZES.xxLarge,
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "Regular",
    fontSize: SIZES.medium,
    textAlign: "center",
  },
  contents: {
    flexDirection: "row",
    alignItems: "center",
    width: 300,
    padding: 10,
    justifyContent: "space-between",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.2)",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderRadius: 10,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 60,
  },
  menuIcon: {
    alignItems: "center",
  },
  registerBtn: {
    gap: 15,
    alignItems: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 300,
  },
  iconButton: {
    alignItems: "center",
  },
  buttonText: {
    marginTop: 5,
  },
  logoImage: {
    height: 100,
    width: 100,
  },
  username: {
    fontSize: 18,
  },
});

export default OnBoarding;
