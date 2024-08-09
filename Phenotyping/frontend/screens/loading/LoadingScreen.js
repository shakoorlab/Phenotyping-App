import React from "react";
import { View, StyleSheet, Text } from "react-native";
import LottieView from "lottie-react-native";

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("../../assets/lotties/login_waiting_lottie.json")}
        autoPlay
        loop
        style={styles.lottie}
      />
      <Text style={styles.text}>Signing you in...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // Adjust the background color if needed
  },
  lottie: {
    width: 200,
    height: 200,
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "#000", // Adjust the text color if needed
  },
});

export default LoadingScreen;
