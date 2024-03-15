import { CommonString } from "@core/constants/strings";
import { Platform } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-screen-helper";

export const getKeyboardVerticalOffset = () => {
  const statusBarHeight = getStatusBarHeight();
  const { navigationTitleHeight, searchBarHeight } = CommonString.dimension;
  return Platform.OS === "ios"
    ? 120
    : (statusBarHeight + navigationTitleHeight + searchBarHeight) * -1;
};

export const getPaddingKeyboard = () => {
  const headerHeight = 100;
  const paddingTop = headerHeight * 0.9;
  return paddingTop;
};
