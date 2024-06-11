import { View, Text } from "react-native";
import React from "react";
import { Marker } from "react-native-maps";

const PlotMarker = ({ plot, onPress }) => {
  return (
    <Marker
      onPress={onPress}
      coordinate={{
        latitude: plot.latitude,
        longitude: plot.longitude,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          padding: 5,
          paddingHorizontal: 10,
          borderWidth: 1,
          borderColor: "gray",
          borderRadius: 20,
        }}
      >
        <Text style={{ fontFamily: "InterBold" }}>{plot.plotNumber}</Text>
      </View>
    </Marker>
  );
};

export default PlotMarker;
