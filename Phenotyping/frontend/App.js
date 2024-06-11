import * as React from "react";
import { useFonts } from "expo-font";
import { AuthProvider } from "./context/AuthContext";
import AppNavigator from "./navigation/AppNavigator";

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
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}

export default App;
