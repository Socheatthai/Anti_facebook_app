import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
const OnboardingScreen = () => {
  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate("Login");
  };
  const DoneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.DoneBtn} {...props}>
        <Text>Done</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        DoneButtonComponent={DoneButton}
        containerStyles={{ paddingHorizontal: 15, bottom: 20 }}
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <LottieView
                  autoPlay
                  // ref={animation}
                  style={{
                    width: 300,
                    height: 420,
                    alignItems: "center",
                    justifyContent: "center",
                    bottom: 10,
                  }}
                  source={require("../assets/on1.json")}
                />
              </View>
            ),
            title: "Welcome To Anti-Facebook App",
            subtitle: "Connect, Share and Discover",
          },
          {
            backgroundColor: "#DCD553",
            image: (
              <View>
                <LottieView
                  autoPlay
                  // ref={animation}
                  style={{
                    width: 200,
                    height: 420,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  source={require("../assets/on2.json")}
                />
              </View>
            ),
            title: "This App For You",
            subtitle: "Let's Get Started",
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  DoneBtn: {
    padding: 20,
    fontWeight: 600,
    backgroundColor: "#416282",
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
  },
});

export default OnboardingScreen;
