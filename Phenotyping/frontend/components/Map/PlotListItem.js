import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

const PlotListItem = ({ plot, containerStyle }) => {
  return (
    <Animated.View
      style={[styles.card, containerStyle]}
      entering={FadeInDown.duration(1000).springify()}
    >
      <Image
        source={require("../../assets/images/sorghum.png")}
        style={styles.image}
      />
      <LinearGradient
        colors={["#8cc751", "#32de84"]} //#FFD439 #FF7A00
        start={[0, 0]}
        end={[3, 1]}
        style={styles.rightContainer}
      >
        <Text style={styles.title}>{plot.plotNumber}</Text>
        <Text style={styles.description}>
          This plot is part of the Climate Smart project
        </Text>

        <View style={styles.footer}>
          <Text style={styles.price}>Field {plot.field}</Text>
          <Text style={styles.price}>PI {plot.piNumber}</Text>
        </View>
      </LinearGradient>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 5,
    borderRadius: 20,
    flexDirection: "row",
    overflow: "hidden", // allows for the card border radius to be used on the image, even if the image is "above" the card
    borderWidth: 1,
    borderColor: "black",
  },

  image: {
    width: 150,
    height: 150,
    aspectRatio: 1, // width and height equal
    backgroundColor: "lightblue",
    borderRightWidth: 0.5,
  },
  rightContainer: {
    padding: 10,
    flex: 1, // take all available space, but nothing more
  },
  title: {
    fontFamily: "InterBold",
    marginBottom: 10,
    fontSize: 16,
  },
  description: { color: "#181818", fontSize: 16, fontFamily: "InterMedium" },
  price: { fontFamily: "InterBold" },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto", // uses all available above margin so it appears at bottom
  },
});

export default PlotListItem;
