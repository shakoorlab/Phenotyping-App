import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import { useDrawerStatus } from "@react-navigation/drawer";
import { COLORS, FONTS, SIZES, assets, SHADOWS } from "../../constants";
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useAuth } from "../../context/AuthContext";
import { CommonActions } from "@react-navigation/native"; // Import CommonActions

const CustomDrawerContent = (props) => {
  const isDrawerOpen = useDrawerStatus() === "open";
  const { logout } = useAuth();

  const handleLogout = () => {
    logout(); // Clear the user authentication state
  };

  return (
    <>
      <StatusBar style={isDrawerOpen === "light"} />
      <DrawerContentScrollView {...props} style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Image source={assets.person01} style={styles.profilePic} />
          <View style={styles.textContainer}>
            <Text style={styles.userName}>Jake </Text>
            <Text style={styles.userPosition}>Shakoor Lab Technician </Text>
          </View>
        </View>
        <View style={{ flex: 1, marginTop: 15 }}>
          <DrawerItem
            label="Home"
            labelStyle={styles.drawerLabel}
            onPress={() => props.navigation.navigate("FieldSelection")}
            icon={() => <FontAwesome name="home" size={40} color="#1E3050" />}
          />
          <DrawerItem
            label="Weather"
            labelStyle={styles.drawerLabel}
            onPress={() => props.navigation.navigate("Weather")}
            icon={() => <FontAwesome name="cloud" size={35} color="#1E3050" />}
          />
          <DrawerItem
            label="Season Measurements"
            labelStyle={styles.drawerLabel}
            onPress={() =>
              props.navigation.navigate("MeasurementSelectionScreen")
            }
            icon={() => <FontAwesome name="leaf" size={35} color="#1E3050" />}
          />

          <DrawerItem
            label="Settings"
            labelStyle={styles.drawerLabel}
            onPress={() => props.navigation.navigate("#")}
            icon={() => <FontAwesome name="gear" size={40} color="#1E3050" />}
          />
        </View>

        {/* Footer container for the logout button */}
        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: COLORS.light, // Dark background color
  },
  userInfoSection: {
    flexDirection: "row", // Align children in a row
    alignItems: "center", // Center children vertically
    paddingLeft: 20,
    paddingBottom: 30,
    paddingTop: 30, // Adjust padding as needed
    backgroundColor: COLORS.primary, // Slightly lighter color for the profile section
  },

  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40, // Circular image
  },
  textContainer: {
    marginLeft: 20, // Space between the profilePic and the text container
  },
  userName: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 20, // Add space between the profilePic and the userName
  },
  userPosition: {
    color: "white",
    fontSize: 18,
    marginLeft: 20, // Add space between the profilePic and the userName
  },

  drawerLabel: {
    fontSize: 18,
  },
  footerContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginTop: 605, //!this should not be permanent code
    borderTopWidth: 2, // if you want a separator line
    borderTopColor: "gray", // separator color
  },
  logoutButton: {
    backgroundColor: COLORS.primary,
    padding: SIZES.large,
    borderRadius: SIZES.extraLarge,
    ...SHADOWS.light,
    width: 150,
    alignItems: "center", // Center text inside the button
  },
  logoutButtonText: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.medium,
    color: COLORS.white,
  },
});

export default CustomDrawerContent;
