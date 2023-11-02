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
