import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { DataCollectors, PlotCollected } from "../../SubInfo";
import { COLORS, SIZES, FONTS } from "../../../constants";

const DataCollected = ({ collector }) => {
  return (
    <View style={styles.container} key={collector.id}>
      <Image
        source={collector.image}
        resizeMode="contain"
        style={styles.avatar}
      />
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>Data collected by {collector.name}</Text>
        <Text style={styles.dateText}>{collector.date}</Text>
      </View>
      <PlotCollected collected_from={collector.collected_from} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: SIZES.base,
    paddingHorizontal: SIZES.base * 2,
  },
  avatar: {
    width: 40,
    height: 40,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: SIZES.base,
  },
  nameText: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
  dateText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.small - 2,
    color: COLORS.secondary,
    marginTop: 3,
  },
});

export default DataCollected;
