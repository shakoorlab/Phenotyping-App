// navigation/AuthStackNavigator.js
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/auth/login/LoginScreen";
import SignupScreen from "../screens/auth/signup/SignupScreen";
import OnboardingScreen from "../screens/auth/onboarding/OnboardingScreen";

const Stack = createNativeStackNavigator();

function AuthStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="OnboardingScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignupScreen} />
    </Stack.Navigator>
  );
}

export default AuthStackNavigator;
