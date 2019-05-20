import { Dimensions, Platform } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export const screenHeight =
  SCREEN_WIDTH < SCREEN_HEIGHT ? SCREEN_HEIGHT : SCREEN_WIDTH;
export const screenWidth =
  SCREEN_WIDTH < SCREEN_HEIGHT ? SCREEN_WIDTH : SCREEN_HEIGHT;
export const statusBarHeight = getStatusBarHeight(true);

interface IBackgroundImage {
  flex: number;
  resizeMode: string;
  height: number;
  width: number;
}

export const backgroundImage: IBackgroundImage = {
  flex: 1,
  resizeMode: "cover",
  height: screenHeight,
  width: screenWidth
};

interface IColors {
  primary: string;
  primary1: string;
  primary2: string;
  secondary: string;
  secondary2: string;
  secondary3: string;
  grey1: string;
  grey2: string;
  grey3: string;
  grey4: string;
  grey5: string;
  dkGreyBg: string;
  greyOutline: string;
}

export const colors: IColors = {
  primary: "#397af8",
  primary1: "#4d86f7",
  primary2: "#6296f9",
  secondary: "#8F0CE8",
  secondary2: "#00B233",
  secondary3: "#00FF48",
  grey1: "#43484d",
  grey2: "#5e6977",
  grey3: "#86939e",
  grey4: "#bdc6cf",
  grey5: "#e1e8ee",
  dkGreyBg: "#232323",
  greyOutline: "#cbd2d9"
};

export const HomeStyles = {};
