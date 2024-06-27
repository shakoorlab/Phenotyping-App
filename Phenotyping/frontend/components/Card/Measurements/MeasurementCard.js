import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { measurementsList } from "../../../constants";
import { useNavigation } from "@react-navigation/native";

const MeasurementCard = () => {
  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        data={measurementsList}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.push("PlotRowSelection")}>
            <View
              style={[
                styles.cardContainer,
                { backgroundColor: item.backgroundColor },
              ]}
            >
              <Image source={item.image} style={styles.image} />
              <Text style={styles.text}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: "space-between",
  },
  cardContainer: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    borderRadius: 16,
    marginVertical: 16,
    alignItems: "center",
    paddingHorizontal: 98,
    paddingVertical: 26,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "center",
  },
  text: {
    marginTop: 8,
    fontWeight: "bold",
  },
});

export default MeasurementCard;
