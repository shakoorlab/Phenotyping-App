import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";
import assets from "../../assets/assets";
import { BackButton } from "../../components";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useAuth } from "../../context/AuthContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const MeasurementSelectionHeader = ({ data }) => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        padding: SIZES.font,
        paddingTop: insets.top + SIZES.small, // Add safe area top inset to padding
      }}
    >
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackButton
            imgUrl={assets.left}
            handlePress={() => navigation.goBack()}
            height={0}
          />
        </TouchableOpacity>

        <View style={styles.avatarContainer}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Image
              source={{ uri: user?.imageUrl }} // Use the user's randomly assigned image URL
              resizeMode="contain"
              style={styles.avatarImage}
            />
          </TouchableOpacity>
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={styles.badgeImage}
          />
        </View>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontWeight: "700",
            fontSize: SIZES.extraLarge,
            color: COLORS.white,
          }}
        >
          Select your{" "}
          <Text style={{ color: "rgb(225, 252, 53)" }}>measurements</Text>
        </Text>

        <Text
          style={{
            fontFamily: FONTS.light,
            fontSize: SIZES.medium,
            color: COLORS.gray,
            marginTop: SIZES.base / 2,
          }}
        >
          Phenotypic Measurement Selection
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View style={styles.searchContainer}>
          <Image
            source={assets.search}
            resizeMode="contain"
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search measurements"
            placeholderTextColor="#e0e0e0"
            style={{ flex: 1 }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // Ensures even spacing between BackButton and Avatar
    alignItems: "center", // Vertically centers the elements
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarImage: {
    width: 45,
    height: 45,
    borderColor: "lightgreen", // Set border color
    borderWidth: 2, // Set border width
    borderRadius: 30,
  },
  badgeImage: {
    position: "absolute",
    width: 15,
    height: 15,
    bottom: 0,
    right: 0,
  },
  searchContainer: {
    width: "100%",
    borderRadius: SIZES.font,
    backgroundColor: COLORS.gray,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.small - 2,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: SIZES.base,
  },
});

export default MeasurementSelectionHeader;
