import React from "react";
import { View, Image, StatusBar } from "react-native";
import { CircleButton } from "../../components";
import assets from "../../assets/assets";

const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 373 }}>
    {/* //*image of field for background of details header */}
    <Image
      source={data.image}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    />

    <CircleButton
      imgURL={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />

    {/* //!logic for if the heart is selected in the previous screen, it shows selected on this screen */}
    <CircleButton
      imgURL={assets.heart} //originally was assets.storm
      right={15}
      top={StatusBar.currentHeight + 10}
      // handlePress={() => navigation.navigate("Weather")}
    />
  </View>
);

export default DetailsHeader;
