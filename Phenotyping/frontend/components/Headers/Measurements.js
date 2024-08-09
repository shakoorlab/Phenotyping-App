import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../constants";

const MeasurementsHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Measurements</Text>
      <View style={styles.countContainer}>
        <Text style={styles.count}>6 {""}</Text>
        <Text style={styles.fields}>choices</Text>
      </View>
    </View>
  );
};

// const MeasurementsHeader = ({ numberOfLocations }) => {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.title}>Your Measurements</Text>
//         <View style={styles.countContainer}>
//           <Text style={styles.count}>{numberOfLocations}</Text>
//           <Text style={styles.fields}>
//             {numberOfLocations > 1 ? " fields" : " field"}
//           </Text>
//         </View>
//       </View>
//     );
//   };

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.base, // Minimal vertical padding
    backgroundColor: COLORS.lightGray, // Adjust as needed
  },
  title: {
    fontFamily: FONTS.regular,
    fontFamily: FONTS.bold,
    fontSize: SIZES.medium,
    color: COLORS.white, // Adjust as needed
  },
  countContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  count: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.medium,
    color: "rgb(225, 252, 53)",
  },
  fields: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.medium,
    color: COLORS.white,
  },
});

export default MeasurementsHeader;
