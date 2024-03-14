import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { headerStylePrimary } from "./headerStyles";
import { CommonString } from "@core/constants/strings";
import Login from "@screens/Login";
import SignUp from "@screens/SignUp";

const Stack = createNativeStackNavigator();

export const LoginRoutes = () => {
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
      <Stack.Screen name="Login" component={Login} options={optionsHeader} />
      <Stack.Screen name="SignUp" component={SignUp} options={optionsHeader} />
    </Stack.Navigator>
  );
};
