import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "@screens/Profile";
import EditProfile from "@screens/Profile/EditProfile";
import ListUsers from "@screens/Profile/ListUsers";
import { CommonString } from "@core/constants/strings";

const Stack = createNativeStackNavigator();

export const ProfileRoutes = () => {
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
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={optionsHeader}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={optionsHeader}
      />
      <Stack.Screen
        name="ListUsers"
        component={ListUsers}
        options={optionsHeader}
      />
    </Stack.Navigator>
  );
};
