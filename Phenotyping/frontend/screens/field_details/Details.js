import React from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";

import { COLORS, SIZES, SHADOWS, FONTS } from "../../constants";
import {
  RectButton,
  ProjectDesc,
  DataCollected,
  FocusedStatusBar,
} from "../../components";
import { SubInfo } from "../../constants";
import DetailsHeader from "../../components/Headers/DetailsHeader"; // Importing the DetailsHeader component

const Details = ({ route, navigation }) => {
  const { data } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        {/* //* 'Select' button that takes user to measurements selection */}
        <RectButton
          minWidth={170}
          fontSize={SIZES.large}
          {...SHADOWS.dark}
          handlePress={() => navigation.navigate("MeasurementSelectionScreen")}
        />
      </View>

      {/* //* "Last Collected" data list */}
      <FlatList
        data={data.collectors}
        renderItem={({ item }) => <DataCollected collector={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <ProjectDesc data={data} />

              {data.collectors.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Last Collected:
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;
