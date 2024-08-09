import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";
import assets from "../../assets/assets";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../context/AuthContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeHeader = ({ onSearch }) => {
  const navigation = useNavigation(); //for custom drawer
  const { user } = useAuth(); // Get the current user from the context
  const insets = useSafeAreaInsets(); // Get the safe area insets

  const formatDate = () => {
    const now = new Date();
    const options = {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    };
    return now.toLocaleDateString("en-US", options);
  };

  return (
    <View
      style={{
        padding: SIZES.font,
        paddingTop: insets.top + SIZES.small, // Add safe area top inset to padding
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image
            source={assets.hamburgerMenu} //logo on top left of screen
            resizeMode="contain"
            style={{ width: 27, height: 27 }}
          />
        </TouchableOpacity>
        <View style={{ width: 45, height: 45 }}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image
              source={{ uri: user?.imageUrl }} // Use the user's randomly assigned image URL
              resizeMode="contain"
              style={{ width: "100%", height: "100%", borderColor: "#0D4A3F" }}
            />
          </TouchableOpacity>
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: "absolute",
              width: 15,
              height: 15,
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            // fontFamily: FONTS.bold,
            fontWeight: "700",
            fontSize: SIZES.extraLarge,
            color: COLORS.white,
          }}
        >
          Welcome,{" "}
          <Text style={{ color: "rgb(225, 252, 53)" }}>
            {user?.displayName || "User"}
          </Text>
        </Text>

        <Text
          style={{
            fontFamily: FONTS.light,
            fontSize: SIZES.medium,
            color: COLORS.gray,
            marginTop: SIZES.base / 2,
          }}
        >
          {formatDate()}
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            // marginTop: SIZES.small,
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput //! this should bring up the keyboard
            placeholder="Search locations"
            placeholderTextColor="#e0e0e0"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
