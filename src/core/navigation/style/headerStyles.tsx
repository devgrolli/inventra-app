import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "@core/constants/colors";
import { DataComponent } from "@core/constants/data";
import { CommonString } from "@core/constants/strings";
import ButtonUser from "@core/components/Header/ButtonUser";
import Notification from "@core/components/Header/Notification";
import LogoHeader from "@core/components/Header/Logo";
import { CustomHeaderBack } from "./customHeaderBack";

const size = CommonString.sizeIcons.footer;

const renderTabBarIcon = (icon: string, color: string) => (
  <FontAwesome name={icon as any} size={size} color={color} />
);

export const headerStylePrimary = (namePage: string, icon: string) => {
  return {
    tabBarLabel: namePage,
    headerStyle: DataComponent.header.primary,
    headerTintColor: Colors.primary,
    headerShown: true,
    tabBarIcon: ({ color }: any) => renderTabBarIcon(icon, color),
    headerLeft: () => <ButtonUser />,
    headerRight: () => <Notification />,
  };
};

export const headerStyleSecondary = (
  namePage: string,
  icon: string,
  headerShown = true
) => {
  return {
    tabBarLabel: namePage,
    headerStyle: DataComponent.header.secondary,
    headerTintColor: Colors.white,
    headerShown: headerShown,
    tabBarIcon: ({ color }: any) => renderTabBarIcon(icon, color),
    headerLeft: () => <LogoHeader />,
    // headerRight: () => <Notification />,
  };
};

export const headerNone = () => {
  return {
    headerShown: false,
    tabBarStyle: { display: "none" },
  };
};

export const buttonOptionBack = (title: string = "") => {
  return {
    ...CommonString.optionsHeaderBack,
    headerShown: true,
    gestureEnabled: true,
    headerTitle: title,
    headerLeft: () => <CustomHeaderBack />,
  };
};
