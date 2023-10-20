import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View className="bg-white h-full w-full">
      <StatusBar style="light" />

      {/* background */}
      <Image
        className="h-full w-full absolute"
        source={require("../../assets/images/2.png")}
      />

      {/* images  */}
      {/* <View className="flex-row justify-around w-full absolute">
        <Animated.Image
          className="h-[225] w-[90]"
          entering={FadeInUp.delay(200).duration(1000).springify().damping(3)}
          source={require("../../assets/images/light.png")}
        />
        <Animated.Image
          className="h-[160] w-[65]"
          entering={FadeInUp.delay(400).duration(1000).springify().damping(3)}
          source={require("../../assets/images/light.png")}
        />
      </View> */}

      {/* title and form */}
      <View className="h-full w-full flex justify-around pt-40 pb-10">
        {/* title */}
        <View className="flex items-center">
          <Animated.Text
            className="text-white font-bold tracking-wider text-5xl"
            entering={FadeInUp.duration(1000).springify()}
          >
            Login
          </Animated.Text>
        </View>

        {/* form */}
        <View className="flex items-center mx-4 space-y-4">
          <Animated.View
            className="bg-black/5 p-5 rounded-2xl w-full"
            entering={FadeInDown.duration(1000).springify()}
          >
            <TextInput placeholder="Email" placeholderTextColor={"gray"} />
          </Animated.View>
          <Animated.View
            className="bg-black/5 p-5 rounded-2xl w-full mb-3"
            entering={FadeInDown.delay(200).duration(1000).springify()}
          >
            <TextInput
              placeholder="Password"
              placeholderTextColor={"gray"}
              secureTextEntry
            />
          </Animated.View>

          {/* Login button */}
          <Animated.View className="w-full">
            <TouchableOpacity
              className="w-full bg-sky-400 p-3 rounded-2xl mb-3"
              entering={FadeInDown.delay(400).duration(1000).springify()}
            >
              <Text className="text-xl font-bold text-white text-center">
                Login
              </Text>
            </TouchableOpacity>
          </Animated.View>

          {/* directing to signing up */}
          <Animated.View
            className="flex-row justify-center"
            entering={FadeInDown.delay(600).duration(1000).springify()}
          >
            <Text> Don't have an account? </Text>
            {/* link to sign up page */}
            <TouchableOpacity onPress={() => navigation.push("SignUp")}>
              <Text className="text-sky-600">Sign Up</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}
