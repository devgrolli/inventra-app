import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "@core/constants/colors";
import { DataComponent } from "@core/constants/data";
import { CommonString } from "@core/constants/strings";
import ButtonUser from "@core/components/Header/ButtonUser";
import Notification from "@core/components/Header/Notification";
import LogoHeader from "@core/components/Header/Logo";

const size = CommonString.sizeIcons.footer;

export const headerStylePrimary = (namePage: string, icon: string) => {
  return {
    tabBarLabel: namePage,
    headerStyle: DataComponent.header.primary,
    headerTintColor: Colors.blue,
    headerShown: true,
    tabBarIcon: ({ color }: any) => (
      <FontAwesome name={icon as any} size={size} color={color} />
    ),
    headerLeft: () => <ButtonUser />,
    headerRight: () => <Notification />,
  };
};

export const headerStyleSecondary = (namePage: string, icon: string) => {
  return {
    tabBarLabel: namePage,
    headerStyle: DataComponent.header.secondary,
    headerTintColor: Colors.white,
    headerShown: true,
    tabBarIcon: ({ color }: any) => (
      <FontAwesome name={icon as any} size={size} color={color} />
    ),
    headerLeft: () => <LogoHeader />,
    // headerRight: () => <Notification />,
  };
};
