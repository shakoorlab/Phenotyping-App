import assets from "../assets/assets";
import { COLORS, SHADOWS, SIZES, FONTS } from "../styles/theme";
import { NFTData } from "./dummy";
import { CircleButton, RectButton } from "../components/Button";
import { SubInfo } from "../components/SubInfo";

export const measurementsList = [
  {
    id: "1",
    name: "Pre Season",
    image: require("../assets/images/pre.png"),
    backgroundColor: "rgba(135,206,235,0.8)",
  },
  {
    id: "2",
    name: "Mid Season",
    image: require("../assets/images/sun.png"),
    backgroundColor: "rgba(255,0,0,0.38)",
  },
  {
    id: "3",
    name: "End of Season",
    image: require("../assets/images/sorghum1.png"),
    backgroundColor: "rgba(255,165,0,0.48)",
  },
  {
    id: "4",
    name: "Biomass",
    image: require("../assets/images/sorghum.png"),
    backgroundColor: "rgba(255,210,0,0.38)",
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
