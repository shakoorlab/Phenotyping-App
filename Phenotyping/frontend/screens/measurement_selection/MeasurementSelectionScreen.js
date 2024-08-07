import { View, FlatList, SafeAreaView, Text } from "react-native";
import { FocusedStatusBar } from "../../components";
import { COLORS, SIZES } from "../../constants";
import { StatusBar } from "expo-status-bar";
import MeasurementSelectionHeader from "../../components/Headers/MeasurementSelectionHeader";
import MeasurementCard from "../../components/Card/Measurements/MeasurementCard";

const FieldSelectionScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <StatusBar style="dark" />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<MeasurementSelectionHeader />}
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
          {/* //! this need to be changed to responsive heights */}
          <View style={{ height: 220, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1 }}>
            <View
              style={{
                height: 1000,
                backgroundColor: "#f8f8ff", //originall COLORS.white
                paddingHorizontal: SIZES.base * 2,
              }}
            >
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  marginTop: 22,
                  marginBottom: 22,
                  textAlign: "center",
                }}
              >
                Season Measurements
              </Text>
              <MeasurementCard />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default FieldSelectionScreen;
