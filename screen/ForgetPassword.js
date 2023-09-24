import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ForgetPassword = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Chưa Cập Nhật Chức Năng</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={{ top: 40, fontSize: 25, fontWeight: "bold" }}>
          Back To Login Page
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ForgetPassword;
