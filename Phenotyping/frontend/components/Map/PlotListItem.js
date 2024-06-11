import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

const PlotListItem = ({ plot, containerStyle }) => {
  return (
    <Animated.View
      style={[styles.card, containerStyle]}
      entering={FadeInDown.duration(1000).springify()}
    >
      <Image source={{ uri: plot.image }} style={styles.image} />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{plot.plotNumber}</Text>
        <Text style={styles.description}>
          This plot is part of the Climate Smart project
        </Text>

        <View style={styles.footer}>
          <Text style={styles.price}>Field {plot.field}</Text>
          <Text style={styles.price}>PI {plot.piNumber}</Text>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    flexDirection: "row",
    overflow: "hidden", //allows for the card border radius to be used on the image, even if the image is "above" the card
    borderWidth: 1,
    borderColor: "black",
  },

  image: {
    width: 150,
    aspectRatio: 1, //width and height equal
  },
  rightContainer: {
    padding: 10,
    flex: 1, //take all available space, but nothing more
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontFamily: "InterBold",
    marginBottom: 10,
    fontSize: 16,
  },
  description: { color: "gray" },
  price: { fontFamily: "InterBold" },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto", // uses all available above margin so it appears at bottom
  },
});

export default PlotListItem;
