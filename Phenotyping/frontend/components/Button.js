import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";

import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";

//Button for the heart icon
export const BackButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        // backgroundColor: COLORS.white,
        position: "absolute",
        // borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        // ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 30, height: 30 }}
      />
    </TouchableOpacity>
  );
};
export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{ width: 24, height: 30 }}
      />
    </TouchableOpacity>
  );
};

//Button on the project cards to navigate to "details" page, and tells backend which project user has selected
export const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#0D4A3F",
        padding: SIZES.small,
        borderRadius: SIZES.medium,
        minWidth: minWidth || "80%",
        alignItems: "center", // Center the content horizontally
        justifyContent: "center", // Center the content vertically
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Get Started
      </Text>
    </TouchableOpacity>
  );
};

export const SelectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#11645E",
        padding: SIZES.small,
        borderRadius: SIZES.medium,
        minWidth: minWidth,
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Select
      </Text>
    </TouchableOpacity>
  );
};
