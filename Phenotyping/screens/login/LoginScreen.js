import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function LoginScreen() {
  return (
    <View className="bg-white h-full w-full">
      <StatusBar style="light" />
      <Image
        className="h-full w-full absolute"
        source={require("../../assets/images/background.png")}
      />
      <View className="flex-row justify-around w-full absolute">
        <Image
          className="h-[225] w-[90]"
          source={require("../../assets/images/light.png")}
        />
        <Image
          className="h-[160] w-[65]"
          source={require("../../assets/images/light.png")}
        />
      </View>

      {/* title and form */}
      <View className="h-full w-full flex justify-around pt-40 pb-10">
        {/* title */}
        <View className="flex items-center">
          <Text className="text-white font-bold tracking-wider text-5xl">
            Login
          </Text>
        </View>

        {/* form */}
        <View className="flex items-center mx-4 space-y-4">
          <View className="bg-black/5 p-5 rounded-2xl w-full">
            <TextInput placeholder="Email" placeholderTextColor={"gray"} />
          </View>
          <View className="bg-black/5 p-5 rounded-2xl w-full mb-3">
            <TextInput
              placeholder="Password"
              placeholderTextColor={"gray"}
              secureTextEntry
            />
          </View>
          {/* Login button */}
          <View className="w-full">
            <TouchableOpacity className="w-full bg-sky-400 p-3 rounded-2xl mb-3">
              <Text className="text-xl font-bold text-white text-center">
                Login
              </Text>
            </TouchableOpacity>
          </View>
          {/* directing to signing up */}
          <View className="flex-row justify-center">
            <Text> Don't have an account? </Text>
            {/* link to sign up page */}
            <TouchableOpacity>
              <Text className="text-sky-600">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
