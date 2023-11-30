import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import { useFonts } from "expo-font";
import LoginScreen from "./screens/login/LoginScreen";
import SignupScreen from "./screens/signup/SignupScreen";
import OnboardingScreen from "./screens/onboarding/OnboardingScreen";
import FieldSelectionScreen from "./screens/fieldSelection/FieldSelection";
import Details from "./screens/FieldDetails/Details";
import WeatherLanding from "./screens/weather/WeatherLanding";
import PlotRowSelection from "./screens/plotRow/PlotRowSelection";
import QuestionsScreen from "./screens/questionaire/QuestionsScreen";
import MeasurementSelectionScreen from "./screens/MeasurementSelection/MeasurementSelectionScreen";
import { BlurView } from "expo-blur"; // Changed from @react-native-community/blur
import { View, Text } from "react-native";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <BlurView intensity={50} style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 20 }}>
        <Text>User 1</Text>
        <DrawerItem
          label="Home"
          onPress={() => props.navigation.navigate("Home")}
        />
        <DrawerItem
          label="Field Selection"
          onPress={() => props.navigation.navigate("FieldSelection")}
        />

        <DrawerItem label="Sign Out" />
      </View>
    </BlurView>
  );
};

function MainStackNavigator() {
  return (
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
      <Stack.Screen
        name="MeasurementSelectionScreen"
        component={MeasurementSelectionScreen}
      />
      <Stack.Screen name="PlotRowSelection" component={PlotRowSelection} />
      <Stack.Screen name="QuestionsScreen" component={QuestionsScreen} />
    </Stack.Navigator>
  );
}

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
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{ drawerType: "slide", drawerStyle: { width: "60%" } }}
      >
        {/* The name 'MainStack' can be any name you choose */}
        <Drawer.Screen
          name="MainStack"
          component={MainStackNavigator}
          options={{ headerShown: false }}
        />
        {/* Add more drawer screens if needed */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
