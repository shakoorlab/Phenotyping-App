import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/login/LoginScreen";
import SignupScreen from "./screens/signup/SignupScreen";
import OnboardingScreen from "./screens/onboarding/OnboardingScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* below sets what page app opens on, and removes the header */}
      <Stack.Navigator
        initialRouteName="OnboardingScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
