import { View, FlatList } from "react-native";
import { COLORS } from "../../constants";
import { StatusBar } from "expo-status-bar";
import MeasurementSelectionHeader from "../../components/Headers/MeasurementSelectionHeader";
import { LinearGradient } from "expo-linear-gradient";
import MeasurementsHeader from "../../components/Headers/Measurements";
import ChecklistComponent from "../../components/measurements/Checklist";

const MeasurementSelectionScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            renderItem={({ item }) => (
              <Animated.View entering={FadeInUp.duration(1000).springify()}>
                {/* <Card data={item} /> */}
              </Animated.View>
            )}
            keyExtractor={(item) => item._id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <>
                <MeasurementSelectionHeader />
                <MeasurementsHeader />
              </>
            }
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          {/* Blue portion of the Projects Selection page */}
          <LinearGradient
            colors={["#0B3731", "#0D4A3F"]}
            style={{
              height: 370,
              borderBottomColor: "red",
              overflow: "hidden",
            }}
          />

          {/* White background behind card, underneath blue heading */}
          <View style={{ backgroundColor: COLORS.white }} />
        </View>
        <ChecklistComponent />
      </View>
    </View>
  );
};
export default MeasurementSelectionScreen;
