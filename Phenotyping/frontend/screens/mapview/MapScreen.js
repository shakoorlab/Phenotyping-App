import React, { useState, useMemo } from "react";
import MapView from "react-native-maps";
import { StyleSheet, View, Text } from "react-native";
import plots from "../../assets/data/plots.json";
import PlotMarker from "../../components/Map/PlotMarker";
import PlotListItem from "../../components/Map/PlotListItem";
import BottomSheet, {
  BottomSheetView,
  BottomSheetFlatList,
} from "@gorhom/bottom-sheet";
// import { FlatList } from "react-native-gesture-handler";
// import { FONTS, COLORS, NFTData } from "../../constants";
// import { FocusedStatusBar } from "../../components";
// import { StatusBar } from "expo-status-bar";
//! for production, will have to do something specific to work with apple/google maps, read docs here (https://docs.expo.dev/versions/latest/sdk/map-view/)
//!RENDER IN MARKER DATA FROM SERVER

export default function MapScreen() {
  const [selectedPlot, setSelectedPlot] = useState(null);
  // const [MapRegion, setMapRegion] = useState({});
  //how high the bottom bar will snap up
  const snapPoints = useMemo(() => ["6.5%", "50%", "90%"], []);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 38.84863673273003,
          longitude: -90.46213232084182,
          latitudeDelta: 0.00122,
          longitudeDelta: 0.00121,
        }}
        mapType="hybrid"
      >
        {plots.map((plot) => (
          <PlotMarker
            key={plot.id}
            plot={plot}
            onPress={() => setSelectedPlot(plot)}
          />
        ))}
      </MapView>

      {/* Displaying selected Apartment FIELD, PI, PLOT, SORGHUM TYPE? */}
      {/* if this has value, the component is rendered, if false, (which reverts to null) will not render the <PlotListItem /> component */}
      {selectedPlot && (
        <PlotListItem
          plot={selectedPlot}
          containerStyle={{
            position: "absolute",
            bottom: 90,
            left: 25, // or can do 10% from the left side of the screen
            right: 25, // or can do 10% from the right side of the screen
          }}
        />
      )}
      <BottomSheet
        // ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        // onChange={handleSheetChanges}
      >
        <BottomSheetView style={{ flex: 1 }}>
          <Text style={styles.listTitle}>
            {plots.length} plots left to phenotype
          </Text>
          <BottomSheetFlatList
            data={plots}
            contentContainerStyle={{
              gap: 10,
              padding: 10,
            }}
            renderItem={({ item }) => <PlotListItem plot={item} />}
          />
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  listTitle: {
    textAlign: "center",
    fontFamily: "InterBold",
    fontSize: 16,
    marginVertical: 5,
    marginBottom: 20,
  },
});
