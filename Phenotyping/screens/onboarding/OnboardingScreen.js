import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import Lottie from "lottie-react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <Onboarding
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
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
                  source={require("../../assets/lotties/search.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Be Precise",
            subtitle:
              "Make sure to take your time when collecting data, and always double check your work and measurements",
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
                  source={require("../../assets/lotties/boost.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Take Breaks",
            subtitle: "Make sure you are taking breaks throughout the day",
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
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
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
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
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
              "After submitting, all of your data will be sent to our shared google cloud account",
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
});
