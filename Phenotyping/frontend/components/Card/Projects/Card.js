import React from "react";
import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS } from "../../../constants";
import assets from "../../../assets/assets";
import { CircleButton, SelectButton } from "../../Button";
import { SubInfo, DataCollectors, Title } from "../../SubInfo";
import useFetchProjects from "../../../hooks/useFetchProjects";

const Card = () => {
  const navigation = useNavigation();
  const { projects, loading } = useFetchProjects();

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      {projects.map((data) => (
        <View
          key={data._id}
          style={{
            backgroundColor: COLORS.white,
            borderWidth: 0.3,
            borderRadius: SIZES.small, // Smaller border radius
            marginBottom: SIZES.base, // Smaller margin between cards
            margin: SIZES.small, // Smaller margin
            ...SHADOWS.dark,
          }}
        >
          <View style={{ width: "100%", height: 200 }}>
            {/* Reduced height */}
            <Image
              source={require("../../../assets/images/sorghum.jpg")} /*{ uri: `data:image/webp;base64,${data.image}` } */
              resizeMode="cover"
              style={{
                width: "100%",
                height: "100%",
                borderTopLeftRadius: SIZES.small, // Smaller border radius
                borderTopRightRadius: SIZES.small, // Smaller border radius
              }}
            />
            <CircleButton imgUrl={assets.heart} right={10} top={10} />
          </View>
          {/* Card's dataCollectorAvatars and geolocation */}
          <SubInfo />
          <View style={{ width: "100%", padding: SIZES.small }}>
            {/* Reduced padding */}
            {/* Card's title and location */}
            <Title
              title={data.project}
              subTitle={data.location}
              titleSize={SIZES.medium} // Reduced title size
              subTitlesSize={SIZES.small} // Reduced subtitle size
            />
            <View
              style={{
                marginTop: SIZES.small, // Smaller margin at the top
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* Displaying how many people are collecting data at a Project location */}
              <DataCollectors collecting={data.collecting} />

              <SelectButton
                minWidth={100} // Reduced minimum width
                fontSize={SIZES.small} // Reduced font size
                handlePress={() => navigation.navigate("Details", { data })}
              />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Card;
