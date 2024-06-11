import { useState } from "react";
import { View, FlatList, SafeAreaView } from "react-native";
import { Card, FocusedStatusBar } from "../../components";
import { COLORS, NFTData } from "../../constants";
import { StatusBar } from "expo-status-bar";
import HomeHeader from "../../components/Headers/HomeHeader";
import Animated, { FadeInUp } from "react-native-reanimated";

const FieldSelectionScreen = () => {
  //
  //
  //-------------------------------- search bar logic ---------------------------------
  const [nftData, setnftData] = useState(NFTData);

  const handleSearch = (value) => {
    if (!value.length) return setnftData(NFTData);

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length) {
      setnftData(filteredData);
    } else {
      setnftData(NFTData);
    }
  };
  //-------------------------------- search bar logic end ---------------------------------
  //
  //

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <StatusBar style="dark" />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => (
              <Animated.View entering={FadeInUp.duration(1000).springify()}>
                <Card data={item} />
              </Animated.View>
            )}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
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
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          {/* White background behind card, underneath blue heading */}
          <View style={{ height: 800, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default FieldSelectionScreen;
