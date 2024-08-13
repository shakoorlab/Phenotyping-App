import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  StyleSheet,
  FlatList,
} from "react-native";
import { Checkbox } from "react-native-paper";

const ChecklistComponent = () => {
  const scrollY = new Animated.Value(0);
  // Mock data placed directly in the component for testing
  const mockData = [
    {
      imageUri:
        "/Users/jstanton/Coding/Mobile Application Development/Phenotyping-App/Phenotyping/frontend/assets/eye.png",
      mainText: "Anthesis tracking",
      subText: "1 per plot",
      isChecked: true,
    },
    {
      imageUri:
        "/Users/jstanton/Coding/Mobile Application Development/Phenotyping-App/Phenotyping/frontend/assets/ruler.png",
      mainText: "Plant height",
      subText: "3 plants per plot",
      isChecked: true,
    },
    {
      imageUri:
        "/Users/jstanton/Coding/Mobile Application Development/Phenotyping-App/Phenotyping/frontend/assets/count.png",
      mainText: "Tiller count",
      subText: "3 plants per plot",
      isChecked: false,
    },
    {
      imageUri:
        "/Users/jstanton/Coding/Mobile Application Development/Phenotyping-App/Phenotyping/frontend/assets/ruler.png",
      mainText: "Tiller height",
      subText: "3 plants chosen for the tiller count",
      isChecked: false,
    },
    {
      imageUri:
        "/Users/jstanton/Coding/Mobile Application Development/Phenotyping-App/Phenotyping/frontend/assets/count.png",
      mainText: "Panicles on tillers count",
      subText: "3 plants per plot",
      isChecked: false,
    },
    {
      imageUri:
        "/Users/jstanton/Coding/Mobile Application Development/Phenotyping-App/Phenotyping/frontend/assets/count.png",
      mainText: "Panicles on tillers count",
      subText: "3 plants per plot",
      isChecked: false,
    },
    {
      imageUri:
        "/Users/jstanton/Coding/Mobile Application Development/Phenotyping-App/Phenotyping/frontend/assets/count.png",
      mainText: "Panicles on tillers count",
      subText: "3 plants per plot",
      isChecked: false,
    },
    {
      imageUri:
        "/Users/jstanton/Coding/Mobile Application Development/Phenotyping-App/Phenotyping/frontend/assets/eye.png",
      mainText: "Tillering proportion",
      subText: "1 per plot",
      isChecked: false,
    },
    {
      imageUri:
        "/Users/jstanton/Coding/Mobile Application Development/Phenotyping-App/Phenotyping/frontend/assets/eye.png",
      mainText: "Lodging proportion",
      subText: "1 per plot",
      isChecked: false,
    },
    {
      imageUri:
        "/Users/jstanton/Coding/Mobile Application Development/Phenotyping-App/Phenotyping/frontend/assets/eye.png",
      mainText: "Lodging type",
      subText: "1 per plot",
      isChecked: false,
    },
    {
      imageUri:
        "/Users/jstanton/Coding/Mobile Application Development/Phenotyping-App/Phenotyping/frontend/assets/ruler.png",
      mainText: "Stem diameter",
      subText: "3 plants per plot",
      isChecked: false,
    },
    {
      imageUri:
        "/Users/jstanton/Coding/Mobile Application Development/Phenotyping-App/Phenotyping/frontend/assets/ruler.png",
      mainText: "Ear height - Corn",
      subText: "6 plants per plot",
      isChecked: false,
    },
    {
      imageUri:
        "/Users/jstanton/Coding/Mobile Application Development/Phenotyping-App/Phenotyping/frontend/assets/ruler.png",
      mainText: "Harvest yield weight",
      subText: "1 per plot",
      isChecked: false,
    },
    {
      imageUri:
        "/Users/jstanton/Coding/Mobile Application Development/Phenotyping-App/Phenotyping/frontend/assets/ruler.png",
      mainText: "Head exertion - Sorghum",
      subText: "6 plants per plot",
      isChecked: false,
    },
    {
      imageUri:
        "/Users/jstanton/Coding/Mobile Application Development/Phenotyping-App/Phenotyping/frontend/assets/eye.png",
      mainText: "Mid-rib color",
      subText: "1 plant per plot",
      isChecked: false,
    },
    {
      imageUri:
        "/Users/jstanton/Coding/Mobile Application Development/Phenotyping-App/Phenotyping/frontend/assets/camera.png",
      mainText: "Image",
      subText: "Any amount",
      isChecked: false,
    },
  ];

  // State to hold the data and any changes to the checkboxes
  const [data, setData] = useState(mockData);

  const handleItemPress = (index) => {
    const newData = [...data];
    newData[index].isChecked = !newData[index].isChecked;
    setData(newData);
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => handleItemPress(index)}
    >
      <Checkbox status={item.isChecked ? "checked" : "unchecked"} />
      <Image source={{ uri: item.imageUri }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>{item.mainText}</Text>
        <Text style={styles.subText}>{item.subText}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContent}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.skipButton}>
          <Text style={styles.skipButtonText}>Skip this step</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
// //! put continue button and skip button in the buttons component!!
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    backgroundColor: "#F5F5F5",
  },
  listContent: {
    paddingTop: 10,
    paddingBottom: 10, // Ensures list does not overlap buttons
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: "#797979",
    borderWidth: 0.17,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5, // For Android
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 5,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  mainText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  subText: {
    fontSize: 14,
    color: "#6B6B6B",
  },
  buttonsContainer: {
    padding: 16,
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderColor: "#E0E0E0",
  },
  continueButton: {
    backgroundColor: "#0D4A3F",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 8,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  skipButton: {
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  skipButtonText: {
    color: "#6B6B6B",
    fontSize: 16,
  },
});

export default ChecklistComponent;
