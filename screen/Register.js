import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LottieView from "lottie-react-native";
import CustomInput from "../components/CustomInput";
import { SignUpButton } from "../components";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "@react-native-material/core";

const Register = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#025874" }}>
      <LottieView
        autoPlay
        // ref={animation}
        style={{
          bottom: 10,
          width: 200,
          height: 250,
          alignItems: "center",
          justifyContent: "center",
        }}
        source={require("../assets/register.json")}
      />
      <View
        style={{
          bottom: 30,
          height: 490,
          width: 420,
          alignItems: "center",
        }}
      >
        {/* <CustomInput placeholder="Username" />
        <CustomInput placeholder="Email" keyboardType={"email-address"} />
        <CustomInput placeholder="Password" secureTextEntry={true} /> */}
        <View>
          <Text style={styles.usernameText}>Username</Text>
          <TextInput
            placeholder="Username"
            style={{ width: "80%", alignItems: "center" }}
          />
        </View>
        <View>
          <Text style={styles.emailText}>Email</Text>
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            style={{ width: "80%", alignItems: "center", top: 20 }}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              color: "white",
              top: 35,
              fontWeight: "bold",
            }}
          >
            Password
          </Text>
          <TextInput
            placeholder="Password"
            secureTextEntry={isPasswordShown}
            style={{
              width: "80%",
              alignItems: "center",
              top: 40,
            }}
          />
          <TouchableOpacity
            onPress={() => setIsPasswordShown(!isPasswordShown)}
            style={{ left: 150, alignItems: "center", bottom: 5 }}
          >
            {isPasswordShown == true ? (
              <Ionicons name="eye-off-sharp" size={24} color="black" />
            ) : (
              <Ionicons name="eye-sharp" size={24} color="black" />
            )}
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: "flex-end",
            width: "78%",
            paddingVertical: 50,
          }}
        ></View>
        <View style={{ top: 30 }}>
          <SignUpButton />
        </View>
        <View
          style={{
            top: 50,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Already Have An Account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text
              style={{
                color: "#AFAA1C",
                fontWeight: "bold",
                fontSize: 18,
                left: 10,
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  usernameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    bottom: 5,
  },
  emailText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    top: 15,
  },
});

export default Register;
