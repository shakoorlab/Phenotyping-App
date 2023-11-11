import {
  View,
  Text,
  TextInput,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState, useCallback, useEffect } from "react";
import { theme } from "./theme";
import {
  MagnifyingGlassIcon,
  CalendarDaysIcon,
  XMarkIcon,
  ChevronLeftIcon,
} from "react-native-heroicons/outline";
import { MapPinIcon } from "react-native-heroicons/solid";
import { debounce } from "lodash";
import { fetchLocations } from "../../api/weather";
import { fetchWeatherForecast } from "../../api/weather";
import { weatherImages } from "../../constants";
import * as Progress from "react-native-progress";
import { getData, storeData } from "../../utils/asyncStorage";
import { useNavigation } from "@react-navigation/native";

const WeatherLanding = () => {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState({});

  //--------------------- logic for search bar --------------------------
  const [showSearch, toggleSearch] = useState(false);
  //
  //
  //--------------------- logic for search bar 'searching'  --------------------------
  const [locations, setLocations] = useState([]);
  const handleLocation = (loc) => {
    // console.log("location: ", loc);
    setLocations([]);
    toggleSearch(false);
    setLoading(true); //will show loading bar until app receives data
    fetchWeatherForecast({
      cityName: loc.name,
      days: "7",
    }).then((data) => {
      setWeather(data); //this makes it so that when you click a location in the search bar, it saves it in state
      setLoading(false); // will not show loading bar because you have the data
      storeData("city", loc.name);
      // console.log("got forecast: ", data);
    });
  };
  //
  //

  const handleSearch = (value) => {
    // fetch locations
    if (value.length > 2) {
      fetchLocations({ cityName: value }).then((data) => {
        setLocations(data);
      });
    }
  };
  // -----------async so that when you open this page, it has a preloaded values
  useEffect(() => {
    fetchMyWeatherData();
  }, []);

  const fetchMyWeatherData = async () => {
    let myCity = await getData("city");
    let cityName = "Islamabad";
    if (myCity) {
      cityName = myCity;
    }
    fetchWeatherForecast({
      cityName,
      days: "7",
    }).then((data) => {
      // console.log('got data: ',data.forecast.forecastday);
      setWeather(data);
      setLoading(false);
    });
    // --------------------------------------------------end of async code-------------------------
  };
  const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []); //the debounce is used so that the console does not return every character typed into the search bar, only what is typed in after 1.2 seconds
  const { current, location } = weather;
  const navigation = useNavigation();

  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image
        blurRadius={70}
        source={require("../../assets/images/weather/bg.png")}
        className="absolute w-full h-full"
      />
      {loading ? (
        <View className="flex-1 flex-row justify-center items-center">
          <Progress.CircleSnail thickness={10} size={140} color="#0bb3b2" />
        </View>
      ) : (
        <SafeAreaView className="flex flex-1">
          {/* ------------------------------------search section---------------------------- */}
          <View style={{ height: "7%" }} className="mx-4 z-50">
            {/* ml-20 mr-4 relative z-5 */}
            <View
              className="flex-row justify-between items-center rounded-full"
              style={{
                backgroundColor: showSearch
                  ? theme.bgWhite(0.2)
                  : "transparent",
              }}
            >
              {!showSearch && (
                // Left return navigation Icon
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  className="rounded-full p-3 m-1"
                  style={{ backgroundColor: theme.bgWhite(0.3) }}
                >
                  <ChevronLeftIcon size="25" color="white" />
                </TouchableOpacity>
              )}

              {/* Existing Search Bar and magnifyglass on right side of screen Icon */}
              {showSearch ? (
                <TextInput
                  onChangeText={handleTextDebounce}
                  placeholder="Search city"
                  placeholderTextColor={"lightgray"}
                  className="pl-6 h-10 pb-1 flex-1 text-base text-white"
                />
              ) : null}
              <TouchableOpacity
                onPress={() => toggleSearch(!showSearch)}
                className="rounded-full p-3 m-1"
                style={{ backgroundColor: theme.bgWhite(0.3) }}
              >
                {showSearch ? (
                  <XMarkIcon size="25" color="white" />
                ) : (
                  <MagnifyingGlassIcon size="25" color="white" />
                )}
              </TouchableOpacity>
            </View>
            {locations.length > 0 && showSearch ? (
              <View className="absolute w-full bg-gray-300 top-16 rounded-3xl ">
                {locations.map((loc, index) => {
                  let showBorder = index + 1 != locations.length;
                  let borderClass = showBorder
                    ? " border-b-2 border-b-gray-400"
                    : "";
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => handleLocation(loc)}
                      className={
                        "flex-row items-center border-0 p-3 px-4 mb-1 " +
                        borderClass
                      }
                    >
                      <MapPinIcon size="20" color="gray" />
                      <Text className="text-black text-lg ml-2">
                        {loc?.name}, {loc?.country}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
          </View>

          {/* forecast section */}
          <View className="mx-4 flex justify-around flex-1 mb-2">
            {/* location */}
            <Text className="text-white text-center text-2xl font-bold">
              {location?.name},
              <Text className="text-lg font-semibold text-gray-300">
                {location?.country}
              </Text>
            </Text>
            {/* weather icon */}
            <View className="flex-row justify-center">
              <Image
                // source={{uri: 'https:'+current?.condition?.icon}}
                source={weatherImages[current?.condition?.text || "other"]}
                className="w-52 h-52"
              />
            </View>
            {/* degree celcius */}
            <View className="space-y-2">
              <Text className="text-center font-bold text-white text-6xl ml-5">
                {current?.temp_c}&#176;
              </Text>
              <Text className="text-center text-white text-xl tracking-widest">
                {current?.condition?.text}
              </Text>
            </View>

            {/* other stats */}
            <View className="flex-row justify-between mx-4">
              <View className="flex-row space-x-2 items-center">
                <Image
                  source={require("../../assets/images/weather/wind.png")}
                  className="w-6 h-6"
                />
                <Text className="text-white font-semibold text-base">
                  {current?.wind_kph}km
                </Text>
              </View>
              <View className="flex-row space-x-2 items-center">
                <Image
                  source={require("../../assets/images/weather/drop.png")}
                  className="w-6 h-6"
                />
                <Text className="text-white font-semibold text-base">
                  {current?.humidity}%
                </Text>
              </View>
              <View className="flex-row space-x-2 items-center">
                <Image
                  source={require("../../assets/images/weather/sun.png")}
                  className="w-6 h-6"
                />
                <Text className="text-white font-semibold text-base">
                  {weather?.forecast?.forecastday[0]?.astro?.sunrise}
                </Text>
              </View>
            </View>
          </View>

          {/* forecast for next days */}
          <View className="mb-2 space-y-3">
            <View className="flex-row items-center mx-5 space-x-2">
              <CalendarDaysIcon size="22" color="white" />
              <Text className="text-white text-base">Daily forecast</Text>
            </View>
            <ScrollView
              horizontal
              contentContainerStyle={{ paddingHorizontal: 15 }}
              showsHorizontalScrollIndicator={false}
            >
              {weather?.forecast?.forecastday?.map((item, index) => {
                const date = new Date(item.date);
                const options = { weekday: "long" };
                let dayName = date.toLocaleDateString("en-US", options);
                dayName = dayName.split(",")[0];

                return (
                  <View
                    key={index}
                    className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
                    style={{ backgroundColor: theme.bgWhite(0.15) }}
                  >
                    <Image
                      // source={{uri: 'https:'+item?.day?.condition?.icon}}
                      source={
                        weatherImages[item?.day?.condition?.text || "other"]
                      }
                      className="w-11 h-11"
                    />
                    <Text className="text-white">{dayName}</Text>
                    <Text className="text-white text-xl font-semibold">
                      {item?.day?.avgtemp_c}&#176;
                    </Text>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </SafeAreaView>
      )}
    </View>
  );
};

export default WeatherLanding;
