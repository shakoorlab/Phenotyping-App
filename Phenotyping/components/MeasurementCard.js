import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS, measurementsList } from "../constants";
import { useNavigation } from "@react-navigation/native";

const MeasurementCard = () => {
  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        data={measurementsList}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.push("PlotRowSelection")}>
            <View
              style={{
                backgroundColor: item.backgroundColor,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 7,
                borderRadius: 16,
                marginVertical: 16,
                alignItems: "center",
                paddingHorizontal: 98,
                paddingVertical: 26,
              }}
            >
              <Image
                source={item.image}
                style={{ width: 150, height: 150, resizeMode: "center" }}
              />
              <Text style={{ marginTop: 8, fontWeight: "bold" }}>
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default MeasurementCard;

const styles = StyleSheet.create({});
