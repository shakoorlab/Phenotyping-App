import React, { useState, useMemo, useRef, useEffect } from "react";
import MapView from "react-native-maps";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Dimensions,
  FlatList,
} from "react-native";
import PlotMarker from "../../components/Map/PlotMarker";
import PlotListItem from "../../components/Map/PlotListItem";
import BottomSheet, {
  BottomSheetView,
  BottomSheetFlatList,
} from "@gorhom/bottom-sheet";
import useFetchPlots from "../../hooks/useFetchPlots";
import {
  PanGestureHandler,
  GestureHandlerRootView,
  State,
} from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

export default function MapScreen() {
  const [selectedPlot, setSelectedPlot] = useState(null);
  const [selectedPlotIndex, setSelectedPlotIndex] = useState(null);
  const snapPoints = useMemo(() => ["6.5%", "50%", "90%"], []);
  const { plots, loading, error } = useFetchPlots("1");

  const plotListRef = useRef(null);

  useEffect(() => {
    if (selectedPlotIndex !== null) {
      setSelectedPlot(plots[selectedPlotIndex]);
    }
  }, [selectedPlotIndex, plots]);

  const handleMarkerPress = (plotIndex) => {
    setSelectedPlotIndex(plotIndex);
    plotListRef.current.scrollToIndex({ index: plotIndex, animated: false }); // Ensure FlatList does not animate scroll
  };

  const handleSwipeDown = ({ nativeEvent }) => {
    if (nativeEvent.state === State.END) {
      if (nativeEvent.translationY > 100) {
        setSelectedPlot(null);
      }
    }
  };

  const renderItem = ({ item }) => (
    <View style={{ width }}>
      <PlotListItem plot={item} containerStyle={styles.cardContainer} />
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loaderContainer}>
        <Text>Error fetching plots: {error.message}</Text>
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={styles.container}>
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
        {plots.map((plot, index) => (
          <PlotMarker
            key={plot.id}
            plot={plot}
            onPress={() => handleMarkerPress(index)}
          />
        ))}
      </MapView>

      {selectedPlot && (
        <PanGestureHandler onHandlerStateChange={handleSwipeDown}>
          <View style={styles.selectedCardContainer}>
            <PlotListItem
              plot={selectedPlot}
              containerStyle={styles.cardContainer}
            />
          </View>
        </PanGestureHandler>
      )}

      <View style={styles.flatListContainer}>
        <FlatList
          ref={plotListRef}
          data={plots}
          horizontal
          pagingEnabled
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          getItemLayout={(data, index) => ({
            length: width,
            offset: width * index,
            index,
          })}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <BottomSheet index={0} snapPoints={snapPoints}>
        <BottomSheetView style={{ flex: 1 }}>
          <Text style={styles.listTitle}>
            {plots.length} plots left to phenotype
          </Text>
          <BottomSheetFlatList
            data={plots}
            contentContainerStyle={{
              gap: 10,
              padding: 15,
            }}
            renderItem={({ item }) => <PlotListItem plot={item} />}
          />
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
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
  flatListContainer: {
    position: "absolute",
    bottom: 90,
    left: 0,
    right: 0,
    height: 160, // Adjust height as needed
    alignItems: "center", // Center children horizontally
  },
  cardContainer: {
    width: "90%",
    alignSelf: "center", // Center the card itself within the parent
  },

  listTitle: {
    textAlign: "center",
    fontFamily: "InterBold",
    fontSize: 16,
    marginVertical: 5,
    marginBottom: 20,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
