import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Onboarding from "react-native-onboarding-swiper";
import Lottie from "lottie-react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function OnboardingScreen() {
  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate("Login");
  };
  const handleSkip = () => {
    navigation.navigate("Login");
  };
  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text>Done</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleSkip}
        DoneButtonComponent={doneButton}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: "#a7f3d0", //original was #fff
            image: (
              <View>
                <Lottie
                  style={{
                    width: wp("50%"), // 50% of screen width
                    height: wp("70%"), // 50% of screen width, for a square logo
                    resizeMode: "contain",
                  }}
                  source={require("../../assets/lotties/security-research.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Hi!",
            subtitle: "Welcome to the Shakoor Lab's mobile phenotyping app",
          },
          {
            backgroundColor: "#fef3c7",
            image: (
              <View>
                <Lottie
                  style={{
                    width: wp("50%"), // 50% of screen width
                    height: wp("70%"), // 50% of screen width, for a square logo
                    resizeMode: "contain",
                  }}
                  source={require("../../assets/lotties/plant-sprout.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Your Mission",
            subtitle:
              "You will be collecting multiple different datapoints about sorghum through the day",
          },
          {
            backgroundColor: "#a78bfa",
            image: (
              <View>
                <Lottie
                  style={{
                    width: wp("50%"), // 50% of screen width
                    height: wp("70%"), // 50% of screen width, for a square logo
                    resizeMode: "contain",
                  }}
                  source={require("../../assets/lotties/search.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Questions",
            subtitle:
              "If you find you have any questions, please reach out to Jocelyn, or your supervisor!",
          },
          {
            backgroundColor: "#ffa3ce",
            image: (
              <View>
                <Lottie
                  style={{
                    width: wp("50%"), // 50% of screen width
                    height: wp("70%"), // 50% of screen width, for a square logo
                    resizeMode: "contain",
                  }}
                  source={require("../../assets/lotties/boost.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Prevent Exhaustion",
            subtitle:
              "Make sure to take multiple breaks and consume plenty of water",
          },
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <Lottie
                  style={{
                    width: wp("50%"), // 50% of screen width
                    height: wp("70%"), // 50% of screen width, for a square logo
                    resizeMode: "contain",
                  }}
                  source={require("../../assets/lotties/google.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Submitting Data",
            subtitle:
              "When you submit, all of your data will be sent to our shared google cloud account",
          },
          {
            backgroundColor: "#bae4fd",
            image: (
              <View>
                <Lottie
                  style={{
                    width: wp("50%"), // 50% of screen width
                    height: wp("70%"), // 50% of screen width, for a square logo
                    resizeMode: "contain",
                  }}
                  source={require("../../assets/lotties/confetti.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "That's it!",
            subtitle: "You're done! Have fun, and enjoy data collection!",
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white"',
  },
  doneButton: {
    padding: 20,
  },
});
