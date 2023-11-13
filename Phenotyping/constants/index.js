import assets from "./assets";
import { COLORS, SHADOWS, SIZES, FONTS } from "./theme";
import { NFTData } from "./dummy";
import { CircleButton, RectButton } from "../components/Button";
import { SubInfo } from "../components/SubInfo";

export const apiKey = "1a94d707918b4cf4a22184039232803";
export const weatherImages = {
  "Partly cloudy": require("../assets/images/weather/partlycloudy.png"),
  "Moderate rain": require("../assets/images/weather/moderaterain.png"),
  "Patchy rain possible": require("../assets/images/weather/moderaterain.png"),
  Sunny: require("../assets/images/weather/sun.png"),
  Clear: require("../assets/images/weather/sun.png"),
  Overcast: require("../assets/images/weather/cloud.png"),
  Cloudy: require("../assets/images/weather/cloud.png"),
  "Light rain": require("../assets/images/weather/moderaterain.png"),
  "Moderate rain at times": require("../assets/images/weather/moderaterain.png"),
  "Heavy rain": require("../assets/images/weather/heavyrain.png"),
  "Heavy rain at times": require("../assets/images/weather/heavyrain.png"),
  "Moderate or heavy freezing rain": require("../assets/images/weather/heavyrain.png"),
  "Moderate or heavy rain shower": require("../assets/images/weather/heavyrain.png"),
  "Moderate or heavy rain with thunder": require("../assets/images/weather/heavyrain.png"),
  Mist: require("../assets/images/weather/mist.png"),
  other: require("../assets/images/weather/moderaterain.png"),
};

export const rows = [
  {
    id: "1",
    row: "Row 1",
  },
  {
    id: "2",
    row: "Row 2",
  },
  {
    id: "3",
    row: "Row 3",
  },
  {
    id: "4",
    row: "Row 4",
  },
  {
    id: "5",
    row: "Row 5",
  },
  {
    id: "6",
    row: "Row 6",
  },
  {
    id: "7",
    row: "Row 7",
  },
  {
    id: "8",
    row: "Row 8",
  },
  {
    id: "9",
    row: "Row 9",
  },
  {
    id: "10",
    row: "Row 10",
  },
];
export const measurementsList = [
  {
    id: "1",
    name: "Pre Season",
    image: require("../assets/images/pre.png"),
  },
  {
    id: "2",
    name: "Mid Season",
    image: require("../assets/images/sun.png"),
  },
  {
    id: "3",
    name: "End of Season",
    image: require("../assets/images/sorghum1.png"),
  },
  {
    id: "4",
    name: "Biomass",
    image: require("../assets/images/sorghum.png"),
  },
];
export const plotList = [
  {
    id: "1",
    name: "Plot 1",
    image: require("../assets/images/sorghum.png"),
  },
  {
    id: "2",
    name: "Plot 2",
    image: require("../assets/images/sorghum.png"),
  },
  {
    id: "3",
    name: "Plot 3",
    image: require("../assets/images/sorghum.png"),
  },
  {
    id: "4",
    name: "Plot 4",
    image: require("../assets/images/sorghum.png"),
  },
  {
    id: "5",
    name: "Plot 5",
    image: require("../assets/images/sorghum.png"),
  },
  {
    id: "6",
    name: "Plot 6",
    image: require("../assets/images/sorghum.png"),
  },
  {
    id: "7",
    name: "Plot 7",
    image: require("../assets/images/sorghum.png"),
  },
  {
    id: "8",
    name: "Plot 8",
    image: require("../assets/images/sorghum.png"),
  },
  {
    id: "9",
    name: "Plot 9",
    image: require("../assets/images/sorghum.png"),
  },
  {
    id: "10",
    name: "Plot 10",
    image: require("../assets/images/sorghum.png"),
  },
  {
    id: "11",
    name: "Plot 11",
    image: require("../assets/images/sorghum.png"),
  },
  {
    id: "12",
    name: "Plot 12",
    image: require("../assets/images/sorghum.png"),
  },
];

export {
  assets,
  COLORS,
  SHADOWS,
  SIZES,
  FONTS,
  NFTData,
  CircleButton,
  RectButton,
  SubInfo,
};
