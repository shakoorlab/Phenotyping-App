//This component responsible for rendering the UI and managing the state related to the form inputs

import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import useSignUp from "../../../hooks/useSignUp"; // Import the custom hook

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState(""); // Add state for display name
  const { signUp, loading, error } = useSignUp(); // Use the custom hook

  const handleSignUp = async () => {
    try {
      const user = await signUp(email, password, displayName);
      alert("Sign up successful, check your email to verify");
      setEmail(""); // Clear email input
      setPassword(""); // Clear password input
      setDisplayName(""); // Clear display name input
    } catch (err) {
      alert("Sign up failed: " + err.message);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Background */}
      <Image
        style={styles.backgroundImage}
        source={require("../../../assets/images/signup_bg1.webp")}
      />

      {/* Title and Form */}
      <View style={styles.contentContainer}>
        {/* Title */}
        <View style={styles.titleContainer}>
          <Animated.Text
            style={styles.titleText}
            entering={FadeInUp.duration(1000).springify()}
          >
            Sign Up
          </Animated.Text>
        </View>

        {/* Form */}
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.formContainer}>
            <Animated.View
              style={styles.inputContainer}
              entering={FadeInDown.duration(1000).springify()}
            >
              <TextInput
                value={displayName}
                placeholder="Name"
                placeholderTextColor="gray"
                style={styles.input}
                onChangeText={setDisplayName} // Update state for display name
              />
            </Animated.View>
            <Animated.View
              style={styles.inputContainer}
              entering={FadeInDown.duration(1000).springify()}
            >
              <TextInput
                value={email}
                placeholder="Email"
                placeholderTextColor="gray"
                style={styles.input}
                onChangeText={setEmail}
              />
            </Animated.View>
            <Animated.View
              style={[styles.inputContainer, styles.inputMargin]}
              entering={FadeInDown.delay(200).duration(1000).springify()}
            >
              <TextInput
                value={password}
                placeholder="Password"
                placeholderTextColor="gray"
                secureTextEntry
                style={styles.input}
                onChangeText={setPassword}
              />
            </Animated.View>

            {/* Login Button */}
            <Animated.View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={handleSignUp}
                style={styles.button}
                entering={FadeInDown.delay(400).duration(1000).springify()}
              >
                <Text style={styles.buttonText}>
                  {loading ? "Signing Up..." : "Sign Up"}
                </Text>
              </TouchableOpacity>
            </Animated.View>

            {/* Directing to Signing Up */}
            <Animated.View
              style={styles.signupContainer}
              entering={FadeInDown.delay(600).duration(1000).springify()}
            >
              <Text>Have an account?</Text>
              {/* Link to Sign Up Page */}
              <TouchableOpacity onPress={() => navigation.push("Login")}>
                <Text style={styles.signupText}>Login</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-around",
    paddingTop: 40,
    paddingBottom: 10,
  },
  titleContainer: {
    alignItems: "center",
  },
  titleText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 40, // Adjust size according to design
    letterSpacing: 1,
  },
  formContainer: {
    alignItems: "center",
    marginHorizontal: 16,
  },
  inputContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    padding: 20,
    borderRadius: 30,
    width: "100%",
    marginBottom: 20,
  },
  inputMargin: {
    marginBottom: 30,
  },
  input: {
    width: "100%",
  },
  buttonContainer: {
    width: "100%",
  },
  button: {
    backgroundColor: "#00bfff", // Equivalent to Tailwind's sky-400
    padding: 12,
    borderRadius: 30,
    marginBottom: 12,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signupText: {
    color: "#00bfff", // Equivalent to Tailwind's sky-600
    marginLeft: 10,
  },
});
