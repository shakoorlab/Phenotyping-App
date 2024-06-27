import { View, Text, Image, TextInput } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";
import assets from "../../assets/assets";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useAuth } from "../../context/AuthContext";

const HomeHeader = ({ onSearch }) => {
  const navigation = useNavigation(); //for custom drawer
  const { user } = useAuth(); // Get the current user from the context
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
        <Image
          source={assets.logo} //logo on top left of screen
          resizeMode="contain"
          style={{ width: 200, height: 50 }}
        />

        <View style={{ width: 45, height: 45 }}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image
              source={{ uri: user?.imageUrl }} // Use the user's randomly assigned image URL
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
            fontSize: SIZES.medium,
            color: COLORS.white,
          }}
        >
          Hello {user?.displayName || "User"}! 👋
        </Text>

        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Please select a location
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
            placeholder="Search locations"
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
