import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInUp } from "react-native-reanimated";
import { Card } from "../../components";
import HomeHeader from "../../components/Headers/HomeHeader";
import LocationsHeader from "../../components/Headers/LocationsHeader";
import LoadingScreen from "../../screens/loading/LoadingScreen";
import { COLORS } from "../../constants";
import useFetchProjects from "../../hooks/useFetchProjects";
import { LinearGradient } from "expo-linear-gradient";

const FieldSelectionScreen = () => {
  const { projects, loading } = useFetchProjects();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(projects);
  }, [projects]);

  const handleSearch = (value) => {
    if (!value.length) return setFilteredData(projects);

    const filteredProjects = projects.filter((item) =>
      item.project.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredData(filteredProjects);
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={filteredData}
            renderItem={({ item }) => (
              <Animated.View entering={FadeInUp.duration(1000).springify()}>
                <Card data={item} />
              </Animated.View>
            )}
            keyExtractor={(item) => item._id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <>
                <HomeHeader onSearch={handleSearch} />
                <LocationsHeader numberOfLocations={projects.length} />
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
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              overflow: "hidden",
            }}
          />

          {/* White background behind card, underneath blue heading */}
          <View style={{ height: 800, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </View>
  );
};

export default FieldSelectionScreen;
