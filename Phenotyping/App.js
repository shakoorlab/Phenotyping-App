import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/login/LoginScreen";
import SignupScreen from "./screens/signup/SignupScreen";
import OnboardingScreen from "./screens/onboarding/OnboardingScreen";
import FieldSelectionScreen from "./screens/fieldSelection/FieldSelection";
import Details from "./screens/FieldDetails/Details";
import { useFonts } from "expo-font";
import WeatherLanding from "./screens/weather/WeatherLanding";

const Stack = createNativeStackNavigator();

function App() {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded) return null;

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
        <Stack.Screen name="FieldSelection" component={FieldSelectionScreen} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Weather" component={WeatherLanding} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
