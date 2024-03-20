import Login from "@screens/Account/Login";
import SignUp from "@screens/Account/SignUp";
import ForgotPassword from "@screens/Account/Password/ForgotPassword";
import RecoveryPassword from "@screens/Account/Password/RecoveryPassword";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CommonString } from "@core/constants/strings";
import { CustomHeadeGoBack } from "./customHeader";

const Stack = createNativeStackNavigator();

export const LoginRoutes = () => {
  const optionsHeader = CommonString.optionsHeader;

  const optionHeaderBack = {
    headerShown: true,
    gestureEnabled: true,
    headerTitle: "",
    headerLeft: () => <CustomHeadeGoBack />,
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
      <Stack.Screen name="Login" component={Login} options={optionsHeader} />
      <Stack.Screen name="SignUp" component={SignUp} options={optionsHeader} />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={optionHeaderBack}
      />
      <Stack.Screen
        name="RecoveryPassword"
        component={RecoveryPassword}
        options={optionHeaderBack}
      />
    </Stack.Navigator>
  );
};
