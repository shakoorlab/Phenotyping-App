import { View, Text, Image } from "react-native";
import React from "react";

export default function LoginScreen() {
  return (
    <View className="bg-white h-full w-full">
      <Image
        className="h-full w-full absolute"
        source={require("../../assets/images/background.png")}
      />
      <Text>LoginScreen</Text>
    </View>
  );
}
