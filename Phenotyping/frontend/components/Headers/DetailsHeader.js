import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BackButton } from "../../components";
import assets from "../../assets/assets";

const DetailsHeader = ({ data, navigation }) => (
  <View style={styles.container}>
    <Image
      source={require("../../assets/images/sorghum.jpg")}
      //source={data.image}
      resizeMode="cover"
      style={styles.image}
    />
    <LinearGradient
      colors={["rgba(0, 0, 0, 0.7)", "rgba(0, 0, 0, 0.1)", "transparent"]}
      style={styles.gradient}
    />
    <BackButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={50} // Adjust as needed
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 375,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default DetailsHeader;
