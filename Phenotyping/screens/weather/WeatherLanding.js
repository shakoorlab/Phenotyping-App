import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
} from "react-native";
import {
  MagnifyingGlassIcon,
  CalendarDaysIcon,
  XMarkIcon,
  ChevronLeftIcon,
  MapPinIcon,
} from "react-native-heroicons/outline";
import { debounce } from "lodash";
import { fetchLocations, fetchWeatherForecast } from "../../api/weather";
import { getData, storeData } from "../../utils/asyncStorage";
import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";
import { theme } from "./theme"; // Assuming theme provides certain colors and styles
import { weatherImages } from "../../constants";

const WeatherLanding = () => {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState({});
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocations] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchMyWeatherData();
  }, []);

  const handleLocation = async (loc) => {
    setLocations([]);
    toggleSearch(false);
    setLoading(true);
    const data = await fetchWeatherForecast({ cityName: loc.name, days: "7" });
    setWeather(data);
    setLoading(false);
    await storeData("city", loc.name);
  };

  const handleSearch = async (value) => {
    if (value.length > 2) {
      const data = await fetchLocations({ cityName: value });
      setLocations(data);
    }
  };

  const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);

  const fetchMyWeatherData = async () => {
    const myCity = await getData("city");
    const cityName = myCity || "Islamabad";
    const data = await fetchWeatherForecast({ cityName, days: "7" });
    setWeather(data);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        blurRadius={70}
        source={require("../../assets/images/weather/bg.png")}
        style={styles.fullSize}
      />
      {loading ? (
        <View style={styles.loadingContainer}>
          <Progress.CircleSnail color="#0bb3b2" thickness={10} size={140} />
        </View>
      ) : (
        <SafeAreaView style={styles.flex}>
          <View style={styles.searchSection}>
            <View
              style={showSearch ? styles.searchBarActive : styles.searchBar}
            >
              {!showSearch && (
                <TouchableOpacity
                  style={styles.iconButton}
                  onPress={() => navigation.goBack()}
                >
                  <ChevronLeftIcon size={25} color="white" />
                </TouchableOpacity>
              )}
              {showSearch && (
                <TextInput
                  onChangeText={handleTextDebounce}
                  placeholder="Search city"
                  placeholderTextColor="lightgray"
                  style={styles.searchInput}
                />
              )}
              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => toggleSearch(!showSearch)}
              >
                {showSearch ? (
                  <XMarkIcon size={25} color="white" />
                ) : (
                  <MagnifyingGlassIcon size={25} color="white" />
                )}
              </TouchableOpacity>
            </View>
            {locations.length > 0 && showSearch && (
              <View style={styles.locationsContainer}>
                {locations.map((loc, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.locationItem(index === locations.length - 1)}
                    onPress={() => handleLocation(loc)}
                  >
                    <MapPinIcon size={20} color="gray" />
                    <Text style={styles.locationText}>
                      {loc?.name}, {loc?.country}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
          <View style={styles.forecastContainer}>
            <Text style={styles.locationName}>
              {weather.location?.name},
              <Text style={styles.countryName}>
                {weather.location?.country}
              </Text>
            </Text>
            <View style={styles.centeredRow}>
              <Image
                source={
                  weatherImages[weather.current?.condition?.text || "other"]
                }
                style={styles.weatherIcon}
              />
            </View>
            <View style={styles.temperatureContainer}>
              <Text style={styles.temperature}>{weather.current?.temp_c}°</Text>
              <Text style={styles.weatherCondition}>
                {weather.current?.condition?.text}
              </Text>
            </View>
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Image
                  source={require("../../assets/images/weather/wind.png")}
                  style={styles.smallIcon}
                />
                <Text style={styles.statText}>
                  {weather.current?.wind_kph} km
                </Text>
              </View>
              <View style={styles.statItem}>
                <Image
                  source={require("../../assets/images/weather/drop.png")}
                  style={styles.smallIcon}
                />
                <Text style={styles.statText}>
                  {weather.current?.humidity}%
                </Text>
              </View>
              <View style={styles.statItem}>
                <Image
                  source={require("../../assets/images/weather/sun.png")}
                  style={styles.smallIcon}
                />
                <Text style={styles.statText}>
                  {weather.forecast?.forecastday[0]?.astro?.sunrise}
                </Text>
              </View>
            </View>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.dailyForecast}
          >
            {weather.forecast?.forecastday?.map((item, index) => (
              <View key={index} style={styles.dayForecast}>
                <Image
                  source={weatherImages[item.day.condition.text || "other"]}
                  style={styles.forecastIcon}
                />
                <Text style={styles.dayName}>
                  {
                    new Date(item.date)
                      .toLocaleDateString("en-US", { weekday: "long" })
                      .split(",")[0]
                  }
                </Text>
                <Text style={styles.dayTemp}>{item.day.avgtemp_c}°</Text>
              </View>
            ))}
          </ScrollView>
        </SafeAreaView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  fullSize: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flex: {
    flex: 1,
  },
  searchSection: {
    height: "7%",
    marginHorizontal: 16,
    zIndex: 50,
  },
  searchBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 999,
    backgroundColor: "transparent",
  },
  searchBarActive: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 999,
    backgroundColor: theme.bgWhite(0.2),
  },
  iconButton: {
    padding: 12,
    margin: 4,
    borderRadius: 999,
    backgroundColor: theme.bgWhite(0.3),
  },
  searchInput: {
    paddingLeft: 24,
    height: 40,
    paddingBottom: 4,
    flex: 1,
    fontSize: 16,
    color: "white",
  },
  locationsContainer: {
    position: "absolute",
    width: "100%",
    backgroundColor: "#ccc",
    top: 64,
    borderRadius: 30,
  },
  locationItem: (isLast) => ({
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 4,
    borderBottomWidth: isLast ? 0 : 2,
    borderBottomColor: "#bbb",
  }),
  locationText: {
    color: "black",
    fontSize: 18,
    marginLeft: 8,
  },
  forecastContainer: {
    marginHorizontal: 16,
    justifyContent: "space-around",
    flex: 1,
    marginBottom: 8,
  },
  locationName: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  countryName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ccc",
  },
  centeredRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  weatherIcon: {
    width: 208,
    height: 208,
  },
  temperatureContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  temperature: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 48,
    marginLeft: 20,
  },
  weatherCondition: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    letterSpacing: 2,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8, // Assuming you want space between items in the row
  },

  statText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  smallIcon: {
    width: 24,
    height: 24,
  },
  dailyForecast: {
    paddingHorizontal: 15,
  },
  dayForecast: {
    justifyContent: "center",
    alignItems: "center",
    width: 146,
    height: 100,
    borderRadius: 30,
    paddingVertical: 12,
    spaceY: 4,
    marginRight: 16,
    backgroundColor: theme.bgWhite(0.15),
  },
  forecastIcon: {
    width: 44,
    height: 44,
  },
  dayName: {
    color: "white",
  },
  dayTemp: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
  },
});

export default WeatherLanding;
