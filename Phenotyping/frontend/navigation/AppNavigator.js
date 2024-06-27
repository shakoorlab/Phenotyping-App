// navigation/AppNavigator.js
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "../components/Drawer/CustomDrawerContent";
import { useAuth } from "../context/AuthContext";
import AuthStackNavigator from "./AuthStackNavigator";
import MainStackNavigator from "./MainStackNavigator";

const Drawer = createDrawerNavigator();

function AppNavigator() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user ? (
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          screenOptions={{ drawerType: "slide", drawerStyle: { width: "60%" } }}
        >
          <Drawer.Screen
            name="MainStack"
            component={MainStackNavigator}
            options={{ headerShown: false }}
          />
        </Drawer.Navigator>
      ) : (
        <AuthStackNavigator />
      )}
    </NavigationContainer>
  );
}

export default AppNavigator;
