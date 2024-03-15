import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CommonString } from "@core/constants/strings";
import Login from "@screens/Account/Login";
import SignUp from "@screens/Account/SignUp";
import ForgotPassword from "@screens/Account/Password/ForgetPassword";
import RecoveryPassword from "@screens/Account/Password/RecoveryPassword";

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
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={optionsHeader}
      />
      <Stack.Screen
        name="RecoveryPassword"
        component={RecoveryPassword}
        options={optionsHeader}
      />
    </Stack.Navigator>
  );
};
