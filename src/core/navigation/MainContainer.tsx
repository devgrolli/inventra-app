import * as React from "react";
import { Colors } from "@core/constants/colors";
import { CommonString } from "@core/constants/strings";
import { FontAwesome } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "@screens/Home";
import Login from "@screens/Login";
import Stock from "@screens/Stock";
import Profile from "@screens/Profile";
import ButtonUser from "@core/components/Header/ButtonUser";
import Notification from "@core/components/Header/Notification";
import { useAuth } from "context/AuthContext";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const size = CommonString.sizeIcons.footer;
const optionsHeader = CommonString.optionsHeader;
const isLogged = false;

const headerStyleByName = (namePage: string, icon: string) => {
  return {
    tabBarLabel: namePage,
    headerStyle: {
      height: 180,
      backgroundColor: Colors.blue,
      borderBottomRightRadius: 30,
      borderBottomLeftRadius: 30,
      shadowColor: Colors.blue,
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    headerShown: true,
    tabBarIcon: ({ color }: any) => (
      <FontAwesome name={icon as any} size={size} color={color} />
    ),
    headerLeft: () => <ButtonUser />,
    headerRight: () => <Notification />,
  };
};

const HomeRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={optionsHeader} />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={optionsHeader}
      />
      <Stack.Screen name="Stock" component={Stock} options={optionsHeader} />
    </Stack.Navigator>
  );
};

export function GlobalNavigation() {
  const { user } = useAuth();

  if (!user) {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: Colors.blue,
          tabBarInactiveTintColor: Colors.grey,
        }}
      >
        <Tab.Screen
          key="Login"
          name="Login"
          component={Login}
          options={{
            tabBarLabel: "Menu",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="bars" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors.blue,
        tabBarInactiveTintColor: Colors.grey,
      }}
    >
      <Tab.Screen
        name=" "
        component={HomeRoutes}
        options={headerStyleByName("Início", "home")}
      />
      <Tab.Screen
        name="Estoque"
        component={Stock}
        options={headerStyleByName("Estoque", "cart-plus")}
      />
      <Tab.Screen
        key="Profile"
        name="Profile"
        component={Profile}
        options={headerStyleByName("Perfil", "user-circle-o")}
      />
    </Tab.Navigator>
  );
}
