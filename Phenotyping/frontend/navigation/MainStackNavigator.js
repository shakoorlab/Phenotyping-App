// navigation/MainStackNavigator.js
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FieldSelectionScreen from "../screens/field_selection/FieldSelection";
import Details from "../screens/field_details/Details";
import MeasurementSelectionScreen from "../screens/measurement_selection/MeasurementSelectionScreen";
import MapScreen from "../screens/map_view/MapScreen";
import QuestionsScreen from "../screens/questionaire/QuestionsScreen";

const Stack = createNativeStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="FieldSelection"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="FieldSelection" component={FieldSelectionScreen} />
      <Stack.Screen name="Details" component={Details} />

      <Stack.Screen
        name="MeasurementSelectionScreen"
        component={MeasurementSelectionScreen}
      />
      <Stack.Screen name="PlotRowSelection" component={MapScreen} />
      <Stack.Screen name="QuestionsScreen" component={QuestionsScreen} />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
