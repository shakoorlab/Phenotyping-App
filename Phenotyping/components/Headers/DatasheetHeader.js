import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES, assets } from "../../constants";
import { CircleButton } from "../../components";
import { useNavigation } from "@react-navigation/native";

const DatasheetHeader = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* //! why does this work?-------- */}
        <Image
          // source={assets.storm} //logo on top right of screen
          resizeMode="contain"
          style={{ width: 90, height: 25 }}
        />
        <CircleButton
          imgURL={assets.left}
          handlePress={() => navigation.goBack()}
          style={{ width: 90, height: 25 }}
        />
        {/* //! why does this work?^^--------- */}

        <View style={{ width: 45, height: 45 }}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image
              source={assets.person01}
              resizeMode="contain"
              style={{ width: "100%", height: "100%" }}
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
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}
        >
          Hello User! 👋
        </Text>

        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Phenotyping Measurements
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
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
          <TextInput
            placeholder="Search for a specific measurement"
            style={{ flex: 1 }}
          />
        </View>
      </View>
    </View>
  );
};

export default DatasheetHeader;
