import { View, Text, Image } from "react-native";
import { COLORS, SIZES, FONTS, SHADOWS } from "../constants";
import { Ionicons } from "@expo/vector-icons";
import assets from "../assets/assets";

//* component that is exported to Card.js to show the title and subtitle on the Project card
export const Title = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: subTitleSize,
          color: COLORS.primary,
        }}
      >
        {subTitle}
      </Text>
    </View>
  );
};

//* This component is used for the "# people here" to visually tell the user how many data collectors are at a Project
export const DataCollectors = ({ collecting }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Ionicons
        name="people-outline"
        resizeMode="contain"
        size={24}
        style={{ marginRight: 10 }}
      />
      <Text
        style={{
          fontFamily: FONTS.medium,
          fontSize: SIZES.font,
          color: COLORS.primary,
        }}
      >
        {collecting} people here
      </Text>
    </View>
  );
};
export const PlotCollected = ({ collected_from }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Ionicons
        name="checkbox-outline"
        resizeMode="contain"
        size={24}
        style={{ marginRight: 10 }}
      />
      {/* <Text
        style={{
          fontFamily: FONTS.medium,
          fontSize: SIZES.font,
          color: COLORS.primary,
        }}
      >
        {collected_from}
      </Text> */}
    </View>
  );
};

//*avatar icons on project details page
export const ImageCmp = ({ imgUrl, index }) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        //!make this responsive

        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};

//* used for avatar images to display what data collectors are at certain project
export const DataCollectorAvatars = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      {[assets.person02, assets.person03, assets.person04].map(
        (imgUrl, index) => (
          <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
        )
      )}
    </View>
  );
};

//* Location of the project which is displayed in the white box in middle right of
//! eventually needs to be from backend
export const ProjectLocation = () => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%",
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}
      >
        Location:
      </Text>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
          color: COLORS.primary,
        }}
      >
        Missouri
      </Text>
    </View>
  );
};

//* Exporting the two components from above to be used in card component
export const SubInfo = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <DataCollectorAvatars />
      <ProjectLocation />
    </View>
  );
};
