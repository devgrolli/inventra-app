import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CommonString } from "@core/constants/strings";
import { profileRoutes } from "../routes";

const Stack = createNativeStackNavigator();

export const ProfileNavigation = () => {
  const optionsHeader = CommonString.optionsHeader;

  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        animationDuration: 300,
        animation: "slide_from_right",
      }}
    >
      {profileRoutes().map((route) => (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options ?? optionsHeader}
        />
      ))}
    </Stack.Navigator>
  );
};
