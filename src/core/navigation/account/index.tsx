import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CommonString } from "@core/constants/strings";
import { CustomHeaderBack } from "../style/customHeaderBack";
import { accountRoutes } from "../routes";

const Stack = createNativeStackNavigator();

export const AccountNavigation = () => {
  const buttonOptionBack = (title: string = "") => {
    return {
      ...CommonString.optionsHeaderBack,
      headerShown: true,
      gestureEnabled: true,
      headerTitle: title,
      headerLeft: () => <CustomHeaderBack />,
    };
  };

  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        animationDuration: 300,
        animation: "slide_from_right",
      }}
    >
      {accountRoutes().map((route) => (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={buttonOptionBack()}
        />
      ))}
    </Stack.Navigator>
  );
};
